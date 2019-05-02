import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CardComponent} from "./card.component";
import {ShopItemService} from "../shared/shop-item.service";
import {of} from "rxjs/internal/observable/of";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";

describe('Card component', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let shopItemService: ShopItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [HttpClientModule],
      providers: [ShopItemService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(CardComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // ShopItemService provided to the TestBed
    shopItemService = TestBed.get(ShopItemService);
  });

  describe('OnInit', () => {
    it('should call shopItemsService with proper params', () => {
      // arrange
      const expectedParams = [1, 10];
      spyOn(shopItemService, 'getPaginator').and.returnValue(of({}));
      // act
      component.ngOnInit();
      // assert
      expect(shopItemService.getPaginator).toHaveBeenCalledWith(1, 10, undefined);
    });
  });
});
