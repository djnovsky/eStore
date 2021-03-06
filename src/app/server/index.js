const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser');
const _ = require('lodash');
const app = express();


mongoose.connect('mongodb+srv://admin:admin@cluster0-xejaa.mongodb.net/users?retryWrites=true')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('error', err));
const Schema = mongoose.Schema;

const corsOptions = {
  'origin': '*',
  'methods': 'GET, HEAD, PUT, PATCH, POST, DELETE'
};

app.use(cors(corsOptions));
app.options('*', cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const ShopItemsSchema = new Schema({
  title: {type: String, text: true},
  price: Number,
  description: {type: String, text: true},
  category: String,
  basket: Boolean
});
const ShopItem = mongoose.model('ShopItems', ShopItemsSchema);

const OrderSchema = new Schema({
  email: String,
  itemIds: [String],
  date: Date
});
const NewOrder = mongoose.model('Orders', OrderSchema);

async function createShopItem(item) {
  const shopItem = new ShopItem({
    _id: new mongoose.Types.ObjectId(),
    title: item.title,
    price: item.price,
    description: item.description,
    category: item.category,
    basket: false
  });
  await shopItem.save();
}

async function createOrder(order) {
  const newOrder = new NewOrder({
    email: order.email,
    itemIds: handleArray(order.itemIds),
    date: new Date()
  });
  await newOrder.save()
}

const handleArray = (itemIds) => {
  return itemIds ? itemIds.split(',') : null;
};

const handleError = (error) => {
  res.status(500).json({error: error})
};

const handleRequest = (req, res, next) => {
  if (_.has(req.query, 'searchParams') || _.has(req.query, 'itemIds') || _.has(req.query, 'category')) {
    return next()
  }

  const pageNumber = _.toNumber(req.query.pageNumber);
  const pageSize = _.toNumber(req.query.pageSize);

  ShopItem.find()
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .exec((error, result) => {
      if (error) {
        return handleError(error)
      }
      res.status(200).json({items: result})
    });
};

const handleItemIds = (req, res, next) => {
  const itemIds = handleArray(req.query.itemIds);
  if (!itemIds) {return next() }

  ShopItem.find({_id: itemIds})
    .exec((error, result) => {
      if (error) {
        return handleError(error)
      }

      res.status(200).json({items: result})
    });
};

const handleCategory = (req, res, next) => {
  if (!req.query.category) {
    return next()
  }

  const category = req.query.category;
  const pageNumber = _.toNumber(req.query.pageNumber);
  const pageSize = _.toNumber(req.query.pageSize);

  ShopItem.find({category: category})
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .exec((error, result) => {
      if (error) {
        return handleError(error)
      }

      res.status(200).json({items: result})
    });
};

const handleSearchParams = (req, res, next) => {
  if (!req.query.searchParams) {
    return next()
  }
  const searchParams = req.query.searchParams;

  ShopItem.find({$text: {$search: searchParams}})
    .then((error, result) => {
      if (error) {
        return handleError(error)
      }

      res.status(200).json({items: result})
    })
};


app.get('/items', cors(), handleRequest, handleItemIds, handleCategory, handleSearchParams);

app.get('/items/categories', cors(), (req, res) => {
  ShopItem.find()
    .exec((error, result) => {
      if (error) {
        return handleError(error)
      }

      res.status(200).json({
        categories: !_.isNull(_.uniq(result.map((item) => item.category))) ? _.uniq(result.map((item) => item.category)) : []
      })
    })
});

app.get('/items/basket', cors(), (req, res) => {
  ShopItem.find({basket: true})
    .exec((error, result) => {
      if (error) {
        return handleError(error)
      }

      res.status(200).json({
        items: result,
        count: result.length
      })
    });
});

app.post('/items/updatebasket', cors(), (req, res) => {
  const itemId = req.body.itemId;
  const addToBasket = req.body.inbasket;
  const query = {_id: itemId};

  ShopItem.findOneAndUpdate(query, {$set: {basket: addToBasket}}, (error, result) => {
    if (error) {
      return handleError(error)
    }

    res.status(200).json({
      success: true
    });
  })
});

app.post('/items/createorder', cors(), (req, res, next) => {
  if (_.isEmpty(req.body)) {return next()}

  createOrder(req.body)
    .then(res.status(200).json({
      success: true
    }));
});

app.post('/items', cors(), (req, res) => {
  createShopItem(req.body)
    .then(res.status(200).json({
      success: true
    }));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({error: 'error'});
});

app.listen(3000, () => console.log('Listening on port 3000...'));
