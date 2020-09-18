import Popup from "reactjs-popup";
import React, { Component } from 'react';
import {data} from './../../../Fbase';

class Cakeitem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name] : value,
            itemName: this.props.itemName
        })
    }
    
    addData = (itemName, name, phone, quantity, address, time, note) => {
        data.push({
            itemName : itemName,
            userName : name,
            userPhone : phone,
            itemQuantity : quantity,
            userAddress : address,
            userTime : time,
            itemNote : note        
            })
    }


    render() {
        return (
                <div className={this.props.itemIsActive}>
            <img src={this.props.itemImage} alt="Burger" />
            <div className="carousel-caption">
                <p><strong style={{ "fontSize": "35px" }}>{this.props.itemName}</strong></p>
                <h3 style={{ "color": "red" }}>{this.props.itemPrice} VND</h3>
                <p>Nhân bánh bao gồm: Dưa chuột, thịt nướng, cà rốt, rau mùi, rau thơm, củ cải và một chút tình yêu.</p>
                <div className="info_btn_shadow">
                <Popup modal trigger={<a type="button" className="info_btn">Đặt Hàng</a>}>
                <div className="form-group">
                  <form>
                  <label name="item">{this.props.itemName}</label>
                  <input type="text" name="name" id="" className="form-control" placeholder="Tên khách hàng, VD: Nguyễn Văn A" onChange={(event) => this.isChange(event)}/>
                  <input type="text" name="phone" id="" className="form-control" placeholder="Số điện thoại, VD: 0123456789" onChange={(event) => this.isChange(event)}/>
                  <input type="text" name="quantity" id="" className="form-control" placeholder="Số lượng đặt, VD: 3" onChange={(event) => this.isChange(event)}/>
                  <input type="text" name="address" id="" className="form-control" placeholder="Địa chỉ giao, VD: 123 Phường X, Quận Y, TP Z" onChange={(event) => this.isChange(event)}/>
                  <input type="text" name="time" id="" className="form-control" placeholder="Thời gian giao, VD: 7 giờ 1/2/2020" onChange={(event) => this.isChange(event)}/>
                  <input type="text" name="note" id="" className="form-control" placeholder="Ghi chú" onChange={(event) => this.isChange(event)}/>
                  <button type="submit" className="btn btn-primary" onClick={() => this.addData(
                                                                                this.state.itemName,
                                                                                this.state.name,
                                                                                this.state.phone,
                                                                                this.state.quantity,
                                                                                this.state.address,
                                                                                this.state.time,
                                                                                this.state.note
                                                                    )}>Đặt hàng</button>
                  </form>
                </div>
                </Popup>
                </div>
            </div>
        </div>
        );
    }
}

export default Cakeitem;