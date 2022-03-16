import React, { Component } from "react";
import { Form, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';
import ChildButtonInGrid from './component/ChildButtonInGrid';

class App extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
            opName: "",
            opContect1: "",
            opEmail: "",
            rpName: "",
            rpContect1: "",
            rpEmail: "",
            isOpenModal: false,
            storeName : "",
            isOpenPostCode : false,
            postCode : "",
            address : "",
            addressDetail : "",
        };
    
    }
    openModal = () => {
        this.setState({
            isOpenModal: true,
        });
    };

    closeModal = () => {
        this.setState({
            isOpenModal: false,
        });
    };

    gridRef = React.createRef();
    appendRow = (selectedProductRow) => {
        this.gridRef.current.getInstance().appendRow(selectedProductRow);
    }

    
    render(){
        const onSelectButtonClicked = (productGrid, rowKey) => {
            const selectedProductRow = productGrid.getRow(rowKey);
            this.appendRow(selectedProductRow);
        };
        
        const columns = [
            { name: "image", header: "Image", width: "auto" },
            { name: "title", header: "Title", width: "auto" },
            { name: "brand", header: "Brand", width: "auto" },
            { name: "color", header: "Color", width: "auto" },
            { name: "size", header: "Size", width: "auto" },
            { name: "price", header: "Price", width: "auto" },
            { name: "quantity", header: "Qty", width: "auto" },
            { name: "discount", header: "Discount", width: "auto" },
            { name: "totalPrice", header: "Total Prioce", width: "auto" },
            { name: "", header: "", width: "auto"}, //삭제버튼
        ];
      
        const productColumns = [
            { name: "image", header: "Image", width: "auto", minWidth: 100 },
            { name: "title", header: "Title", width: "auto", minWidth: 100 },
            { name: "brand", header: "Brand", width: "auto", minWidth: 100 },
            { name: "price", header: "Price", width: "auto", minWidth: 100 },
            { name: "quantity", header: "Quantity", width: "auto", minWidth: 100 },
            { name: "selectItem", header: "", width: "auto", minWidth: 100, renderer: {type: ChildButtonInGrid, options: {onSelectButtonClicked}}},
        ];

        const productDatas = [
            {image: "", title: "타이틀1", brand: "브랜드1", price: "100000", quantity: ""},
            {image: "", title: "타이틀2", brand: "브랜드2", price: "200000", quantity: ""},
            {image: "", title: "타이틀3", brand: "브랜드3", price: "300000", quantity: ""},
            {image: "", title: "타이틀4", brand: "브랜드4", price: "400000", quantity: ""},
            {image: "", title: "타이틀5", brand: "브랜드5", price: "500000", quantity: ""},
            {image: "", title: "타이틀6", brand: "브랜드6", price: "600000", quantity: ""},
            {image: "", title: "타이틀7", brand: "브랜드7", price: "700000", quantity: ""},
            {image: "", title: "타이틀8", brand: "브랜드8", price: "800000", quantity: ""},
            {image: "", title: "타이틀9", brand: "브랜드9", price: "900000", quantity: ""}
        ];

        return (            
            <div className="App">
                <Grid columns={columns} 
                    ref={this.gridRef}
                    rowHeaders={['checkbox']}/>

                <div className="text-lg-end mt-2">
                    <button type="button" className="btn btn-lg btn-success" onClick={this.openModal}>주문할 상품검색</button>
                </div>
                <Modal show={this.state.isOpenModal}
                    onHide={this.closeModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    scrollable>
                    <Modal.Header closeButton>
                        <Modal.Title>상품선택</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="">
                        <ul className="list-inline mb-1 ">
                            <li className="list-inline-item me-1">
                            <Form.Select name="" className="form-select-sm">
                                <option>대분류를 선택해 주세요</option>
                                <option></option>
                                <option></option>
                            </Form.Select>
                            </li>
                            <li className="list-inline-item me-1">
                            <Form.Select name="" className="form-select-sm">
                                <option>중분류를 선택해 주세요</option>
                                <option></option>
                                <option></option>
                            </Form.Select>
                            </li>
                            <li className="list-inline-item me-1">
                            <Form.Select name="" className="form-select-sm">
                                <option>소분류를 선택해 주세요</option>
                                <option></option>
                                <option></option>
                            </Form.Select>
                            </li>
                            <li className="list-inline-item me-1">
                            <Form.Select name="" className="form-select-sm">
                                <option>SKU,Title</option>
                                <option>SKU</option>
                                <option>Title</option>
                            </Form.Select>
                            </li>
                            <li className="list-inline-item me-1">
                            <Form.Control
                            type="text"
                            className="form-control "
                            size="sm"
                            style={{"minHeight": "1rem"}}
                            placeholder="검색어를 입력하세요"
                            ></Form.Control>
                            </li>
                            <li className="list-inline-item me-1">
                            <button
                            className="btn btn-sm btn-success"
                            onClick={this.saveInvoice}
                            >
                            검색
                            </button>
                            </li>
                        </ul>
                        <ul className="list-inline mb-1 my-3">
                            <li className="list-inline-item me-1">
                                <Form.Label className="col-form-label">바코드 : </Form.Label>
                            </li>
                            <li className="list-inline-item me-1">
                                <Form.Control
                                type="text"
                                className="form-control "
                                size="sm"
                                style={{"minHeight": "1rem"}}
                                placeholder="바코드를 스캔하세요"
                                ></Form.Control>
                            </li>
                            <li className="list-inline-item me-1">
                                <Form.Label className="col-form-label">/ 수량 : </Form.Label>
                            </li>
                            <li className="list-inline-item me-1">
                                <Form.Control
                                type="text"
                                className="form-control "
                                size="sm"
                                style={{"minHeight": "1rem"}}
                                ></Form.Control>
                            </li>

                        </ul>
                        <div className="col-7 grid-margin">
                            <input type="checkbox"  />
                            <Form.Label className="col-form-label">소비자가 기준으로 계산 </Form.Label>
                        </div>
                        <div>
                            <Grid columns={productColumns}
                                data={productDatas}
                                scrollY={true}
                                rowHeaders={['checkbox']}/>
                        </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-sm btn-dark" onClick={this.closeModal}>
                        Close
                        </button>
                    </Modal.Footer>
                    </Modal>
            </div>
        );
    }
}

export default App;
