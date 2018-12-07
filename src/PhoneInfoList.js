import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component{
    static defaultProps = {
        list : [],
        onRemove : () => console.warn('onRemove not defined'),
    }

    render() {
        const {data, onRemove} = this.props;
        const list = data.map(
            // Key(PK 같이 Unique한 값)는 배열을 렌더링할 때 꼭 필요한 값 -> 성능 최적화
            info => (<PhoneInfo key={info.id} info={info} onRemove={onRemove}/>)
        );

        return (
            <div>
                {list}
            </div>
        )
    }
}

export default PhoneInfoList;