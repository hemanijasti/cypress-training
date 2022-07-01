import {url,login_username, login_password} from "../../../config"
import { item_header,cate_name } from "../../support/Constants"
import Navbar from "../../page-objects/components/navbar"
import Loginpage from "../../page-objects/pages/LoginPage"
import Category from "../../page-objects/pages/Categoriespage"
import Cartpage from "../../page-objects/pages/Cartpage"
import Successmsg from "../../page-objects/pages/successpage"


describe('Buying product from demoblaze website', () =>{
    before(function(){
        cy.visit(url)
        Navbar.clickLogin()
    })

    it("should login into the application ", function(){
        Loginpage.login(login_username, login_password)
        Category.categorySelection(cate_name)
        Category.itemSelection(item_header)
        Category.itemDetails()
        Category.addtocart()
        Cartpage.placeorder()
        Cartpage.placeorderformfilling()
        Successmsg.ordersuccess()
        Successmsg.logout()
    })

    
})