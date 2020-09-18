import React, { Component } from 'react';
import {data} from './Fbase'
class DataTable extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    
    componentWillMount() {
        data.on('value', (dulieu) => {
            var mangDulieu = []
            dulieu.forEach(element => {
                const key = element.key;
                const itemName = element.val().itemName;
                const itemNote = element.val().itemNote;
                const itemQuantity = element.val().itemQuantity;
                const userAddress = element.val().userAddress;
                const userName = element.val().userName;
                const userPhone = element.val().userPhone;
                const userTime = element.val().userTime;

                mangDulieu.push({
                    id: key,
                    itemName: itemName,
                    itemNote: itemNote,
                    itemQuantity: itemQuantity,
                    userAddress: userAddress,
                    userName: userName,
                    userPhone: userPhone,
                    userTime: userTime
                })
            })
            this.setState({
                database : mangDulieu
            });
        })
    }

    getData = () => {
        if (this.state.database){
            return this.state.database.map((value, key) => {
                return (
                <tr key={key} style={{"color":"black"}}>
                    <td scope="row">{value.userPhone}</td>
                    <td>{value.id}</td>
                    <td>{value.userName}</td>
                </tr>
                )
            })
            
        }
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead className="thead-inverse">
                        <tr style={{"color":"black"}}>
                            <th>Điện Thoại</th>
                            <th>Mã Đặt Hàng</th>
                            <th>Tên</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.getData()}
                        </tbody>
                </table>
            </div>
        );
    }
}



export default DataTable;