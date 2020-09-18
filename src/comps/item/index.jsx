import React from 'react';
import Cakeitem from './items';


function Item(props) {
    var cakeData = [
        {
            name: 'Bánh 1',
            image: 'images/bb1.jpg',
            desc: '',
            price: 18000,
            isActiveItem: "item active"
        },
        {
            name: 'Bánh 2',
            image: 'images/bb2.jpg',
            desc: '',
            price: 16000,
            isActiveItem: "item"
        },
        {
            name: 'Bánh 3',
            image: 'images/bb3.jpg',
            desc: '',
            price: 14000,
            isActiveItem: "item"
        }
    ];

    const showItemKey = () => {
        var result = [];
        for (var i = 1; i < cakeData.length; i++) {
            result.push(<li data-target="#carousel" data-slide-to={i} key={i} />)
        }
        return result;
    }
    return (
        <div id="carousel" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ol className="carousel-indicators">
                <li data-target="#carousel" data-slide-to={0} className="active" />
                {showItemKey()}
            </ol>

            {/* carousel inner */}
            <div className="carousel-inner" role="listbox">

                {cakeData.map((item, index) => {
                    return <Cakeitem
                        itemIsActive={item.isActiveItem}
                        itemImage={item.image}
                        itemName={item.name}
                        itemPrice={item.price}
                        itemDesc={item.desc}
                        key={index}
                    />
                })}

            </div>{/* carousel inner end */}
        </div>
    );
}

export default Item;