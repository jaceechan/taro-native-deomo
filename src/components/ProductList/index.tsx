import { Component } from 'react'
import { View, Text, Image, Button } from '@tarojs/components'

import heartIcon from '../../assets/heart-fill.png';
import heartIconActive from '../../assets/heart-fill-active.png';

import './index.scss'

export default class ProductList extends Component {

  static defaultProps = {
    productList: [],
    collect: () => { }
  }

  componentDidMount() { }

  handleCollect = (product, index) => {
    this.props.collect(product, index)
  }

  handleAddCart(product) {
    alert(`${product.title} add cart`)
  }


  render() {
    return (
      <View className='product-list-container'>
        {this.props.productList.map((product, index) => (
          <View className='product-item' key={product.id}>
            <Image className='product-thumb' src={product.thumb}></Image>
            <View className='product-price-info'>
              <Text className='product-price'>{product.price}</Text>
              <Text className='product-origin-price'>{product.originPrice}</Text>
            </View>
            <View className='product-title'>{product.title}</View>
            <View className='product-views'>{product.views} Views</View>
            <View className='product-footer'>
              <View className='product-collect' onClick={() => this.handleCollect(product, index)}>
                <Image
                  className='heart-icon'
                  src={product.isCollect ? heartIconActive : heartIcon}
                ></Image>
                <View className='product-collect-count'>{product.collectCount}</View>
              </View>
              <Button className='add-cart-btn' onClick={() => this.handleAddCart(product)}>ADD TO CART</Button>
            </View>
          </View>
        ))}
      </View>
    )
  }
}
