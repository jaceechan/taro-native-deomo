import { Component } from 'react'
import { View, Text } from '@tarojs/components'

import ProductList from '../../components/ProductList/index'

import './index.scss'

export default class Index extends Component {

  state = {
    productList: new Array(20).fill(1).map((item, index) => {
      return {
        thumb: `https://picsum.photos/id/${index}/352/444`,
        title: `Product Title${index}`,
        id: index,
        originPrice: '$199.00',
        price: '$9.99',
        views: Math.round(Math.random() * 1000) + 50,
        collectCount: Math.round(Math.random() * 500),
        isCollect: false,
      }
    })
  };

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  onReachBottom() {
    const start = this.state.productList.length;
    const newData = new Array(20).fill(1).map((item, index) => {
      const id = start + index;
      return {
        thumb: `https://picsum.photos/id/${id}/450/350`,
        title: `Product Title${id}`,
        id,
        originPrice: '$199.00',
        price: '$9.99',
        views: Math.round(Math.random() * 1000) + 50,
        collectCount: Math.round(Math.random() * 500),
        isCollect: false,
      }
    })
    this.setState({
      productList: this.state.productList.concat(newData)
    });

  }

  handleCollect(product, index) {
    const productList = [...this.state.productList];
    this.setState({
      productList: productList.map((item, idx) => idx === index ? { ...item, isCollect: !item.isCollect } : item),
    })
  }

  render() {
    return (
      <View className='index'>
        <View className='banner'></View>
        <View className='product-list-wrapper'>
          <ProductList
            productList={this.state.productList}
            collect={(product, index) => this.handleCollect(product, index)}
          />
        </View>
      </View>
    )
  }
}
