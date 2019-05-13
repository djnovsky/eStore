import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { ShopItemService } from '../shared/shop-item.service';
import { of } from 'rxjs/internal/observable/of';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('Card component', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let shopItemService: ShopItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [HttpClientModule],
      providers: [ShopItemService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    // create component and test fixture
    fixture = TestBed.createComponent(CardComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // ShopItemService provided to the TestBed
    shopItemService = TestBed.get(ShopItemService);
  });

  describe('OnInit', () => {
    fit('should call shopItemsService with proper params', () => {
      // arrange
      const expectedParams = [1, 10];
      spyOn(shopItemService, 'getPaginator').and.returnValue(of({}));
      // act
      component.ngOnInit();
      // assert
      expect(shopItemService.getPaginator).toHaveBeenCalledWith(
        1,
        10,
        undefined
      );
    });
    // xit('should call getPaginatedShopItems',() =>{
    // arrange

    // act
    // component.ngOnInit();
    // assert
    // expect(component.getPaginatedShopItems).toHaveBeenCalled();
    // })
  });

  describe('getShopItemsByCategory', () => {
    fit('shoud call shopItemService meghod getPaginator with proper params', () => {
      // arrange
      // act
      component.getShopItemsByCategory('category', 1);
      // assert
      expect(shopItemService.getPaginator).toHaveBeenCalledWith(
        1,
        10,
        'category'
      );
    });
  });
  describe('showDialog', () => {
    fit('should call showDialog method display', () => {
      // arrange
      // act
      component.showDialog();
      // assert
      expect(component.display).toBe(true);
    });
  });
  describe('paginate', () => {
    fit('should call ShopItemService method getPaginated', () => {
      // arrange
      spyOn(shopItemService, 'getPaginator').and.returnValue(of({}));

      const eventMock = { page: 2, first: 1, row: 4 };
      // act
      component.paginate(eventMock);

      // assert
      expect(shopItemService.getPaginator).toHaveBeenCalledWith(
        3,
        10,
        undefined
      );
    });
    fit('should call ShopItemService method getPaginated', () => {
      // arrange
      spyOn(shopItemService, 'getPaginator').and.returnValue(of({}));
      component.selectedCategory = 'some category';
      const eventMock = { page: 2, first: 1, row: 4 };
      // act
      component.paginate(eventMock);

      // assert
      expect(shopItemService.getPaginator).toHaveBeenCalledWith(
        3,
        10,
        'some category'
      );
    });
  });

  describe('getPaginateShopItems', () => {
    it('should call getPaginatorShopItems with params', () => {
      //arrange

      const expectedParams = [pageNumber, category];

      //act

      component
        //assert
        .expect(shopItemService.getPaginator)
        .toHaveBeenCalled();
    });
  });
});
