<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData"  border style="width: 100%">
              <el-table-column prop="goodsName" label="商品"></el-table-column>
              <el-table-column prop="count" label="量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template scope="scope">
                  <el-button type="text" size="small" @click="delSingleCount(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="totalDiv">
              <span type="small" style="margin-right: 10px">总量：{{totalCount}}</span>
              <span type="small">金额: {{totalMoney}}</span>
            </div>
            <div class="btn"> 
              <el-button type="warning" >挂单</el-button>
              <el-button type="danger" @click="delAllGoods">删除</el-button>
              <el-button type="success" @click="payMoney">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单"></el-tab-pane>
          <el-tab-pane label="外卖"></el-tab-pane>
        </el-tabs>
      </el-col>
      <!-- 产品展示 -->
      <el-col :span="17">
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul>
              <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                <span>{{goods.goodsName}}</span>
                <span class="price">￥{{goods.price}}元</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <div>
                <ul class="cookList">
                    <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                        <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                        <span class="foodName">{{goods.goodsName}}</span>
                        <span class="foodPrice">￥{{goods.price}}元</span>
                    </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <div>
                <ul class="cookList">
                    <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                        <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                        <span class="foodName">{{goods.goodsName}}</span>
                        <span class="foodPrice">￥{{goods.price}}元</span>
                    </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <div>
                <ul class="cookList">
                    <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                        <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                        <span class="foodName">{{goods.goodsName}}</span>
                        <span class="foodPrice">￥{{goods.price}}元</span>
                    </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <div>
                <ul class="cookList">
                    <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                        <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                        <span class="foodName">{{goods.goodsName}}</span>
                        <span class="foodPrice">￥{{goods.price}}元</span>
                    </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Pos",
  data() {
    return {
      tableData: [],
      oftenGoods: [],
      type0Goods:[],
      type1Goods:[],
      type2Goods:[],
      type3Goods:[],
      totalCount: 0,
      totalMoney: 0
    };
  },
  created: function() {
    axios.get('https://www.easy-mock.com/mock/5ca4580c4767c3737055c913/example/oftenGoods')
      .then(response => {
        // console.log(response)
        this.oftenGoods = response.data
      })
      .catch(error => {
        // console.log(error)
        alert('网络错误')
      })
      axios.get('https://www.easy-mock.com/mock/5ca4580c4767c3737055c913/example/typeGoods')
        .then(response => {
          // console.log(response)
          this.type0Goods = response.data[0],
          this.type1Goods = response.data[1],
          this.type2Goods = response.data[2],
          this.type3Goods = response.data[3]
        })
        .catch(error => {
          alert('网络错误')
        })
  },
  mounted: function() {
    let orderHeight = document.body.clientHeight;
    document.getElementById("order-list").style.height = orderHeight + "px";
  },
  methods: {
    addOrderList(goods) {
      this.totalCount = 0
      this.totalMoney = 0
      // 判断商品是否存在于列表中
      let isHave = false;
      for(let i=0;i<this.tableData.length;i++){
        if(this.tableData[i].goodsId === goods.goodsId){
          isHave = true
        }
      }
      // 根据判断写逻辑
      if(isHave) {
        // 改变列表中商品的数量
        let arr = this.tableData.filter(x => x.goodsId === goods.goodsId)
        arr[0].count++
      }else {
        // 不存在商品则开始添加新商品
        let newGoods = {goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1}
        this.tableData.push(newGoods)
      }
      this.getTotalMoney()
    },
    // 删除单个商品
    delSingleCount(goods) {
      console.log(goods)
      this.tableData = this.tableData.filter(x=> x.goodsId != goods.goodsId)
      this.getTotalMoney()
    },
    // 汇总数量金额
    getTotalMoney() {
      this.totalCount = 0
      this.totalMoney = 0
      // 计算汇总金额和数量
      this.tableData.forEach(e => {
        this.totalCount = this.totalCount + e.count
        this.totalMoney = this.totalMoney + (e.price * e.count)
      })
    },
    // 删除所有商品
    delAllGoods() {
      this.totalCount = 0
      this.totalMoney = 0
      this.tableData = []
    },
    // 结账
    payMoney() {
      if(this.totalCount!=0) {
        this.totalCount = 0
        this.totalMoney = 0
        this.tableData = []
        this.$message({
          message: '结账成功！',
          type: 'success'
        })
      }else {
        this.$message.error('您还没点餐呢！')
      }
    }
  },
};
</script>

<style scoped>
.pos-order {
  background-color: #f9fafc;
  border-right: #c0ccda;
  height: 100%;
}
.totalDiv{
  border-bottom: 1px solid #d3dce6;
  background-color: #fff;
  padding: 10px;
}
.btn{
  margin-top: 10px;
}
.title{
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9f6fc;
  padding: 10px;
  text-align: left;
}
.often-goods-list ul li{
  list-style: none;
  float: left;
  padding: 10px;
  margin: 10px;
  padding: 1px solid #e9e5f2;
  background-color: #fff;
  cursor: pointer;
}
.price{
  color: #5887ff;
}
.goods-type{
  clear: both;
  cursor: pointer;
}
.cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auot;
       overflow: hidden;
       background-color: #ffffff;
       padding: 2px;
       float: left;
       margin: 2px;
   }
   .cookList li span{
       
        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 16px;
       padding-left: 10px;
       color:brown;
 
   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
</style>
