import React, {Component} from 'react';

class PhoneForm extends Component {
    
    constructor(props){
        super(props);
        this.state = {name:'', phone:''}
        //this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({[e.target.id] : e.target.value});
    }

    handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
        // 상태값을 onCreate를 통하여 부모에게 전달
        this.props.onCreate(this.state);
        // 초기화
        this.setState({name:'',phone:''})
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder="이름" value={this.state.name} onChange={this.handleChange} id="name"/>
                <input placeholder="전화번호" value={this.state.phone} onChange={this.handleChange} id="phone"/>
                <div>
                    {this.state.name} {this.state.phone}
                </div>
                <button type="submit">등록</button>
            </form>
        )
    }
}

export default PhoneForm;