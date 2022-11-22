import {Fragment} from "react";

import MealsImgCustomName from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css';

const Header = props =>{
    return (

        // where onClick is any custom name but starts with on 
        <Fragment>
        <header className={classes.header}>
            <h1>Go Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={MealsImgCustomName} alt="alt img"/>
        </div>


    </Fragment>
    );
    
};
export default Header;