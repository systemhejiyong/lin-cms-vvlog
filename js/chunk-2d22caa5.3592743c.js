(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d22caa5"],{f3ce:function(a,t,n){"use strict";function e(a,t,n){return t in a?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n,a}n.r(t);var i={name:"VList",provide:function(){return{ListInstance:this}},data:function(){var a=this;return this.keys=[],this.defaultPaginationProps={current:1,pageSize:10,onChange:function(t,n){var e=a.pagination;a.paginationCurrent=t,e&&e.onChange&&e.onChange(t,n)},total:0},{paginationCurrent:1}},props:{header:String,footer:String,dataSource:{type:Array,default:[]},bordered:{type:Boolean,default:!1},itemLayout:{default:"horizontal"},size:{type:String,default:function(){return"large"}},loading:{type:Boolean,default:!1},split:{type:Boolean,default:!0},pagination:{type:[Boolean,Object],default:!1}},computed:{classString:function(){var a,t="";switch(this.size){case"large":t="lg";break;case"small":t="sm"}return["".concat("vv-list"),"".concat("vv-list","-").concat(t),"".concat("vv-list","-").concat(this.itemLayout),(a={},e(a,"".concat("vv-list","-bordered"),this.bordered),e(a,"".concat("vv-list","-split"),this.split),a)]}},methods:{currentChange:function(a){this.pagination.currentChange(a)}}},o=n("2877"),r=Object(o.a)(i,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{class:a.classString},[a.header||a.$slots.header?n("div",{staticClass:"vv-list-header"},[a._t("header",[a._v(a._s(a.header))])],2):a._e(),a.pagination&&"top"==a.pagination.position?n("div",{staticClass:"vv-list-pagination"},[a.pagination?n("el-pagination",{staticClass:"pagination",attrs:{background:!!a.pagination.background&&a.pagination.background,small:!!a.pagination.small&&a.pagination.small,layout:"prev, pager, next, jumper","page-size":a.pagination.pageSize?a.pagination.pageSize:10,total:a.pagination.total?a.pagination.total:null,"current-page":a.pagination.currentPage},on:{"current-change":a.currentChange}}):a._e()],1):a._e(),a._l(a.dataSource,(function(t,n){return[a._t("renderItem",null,{item:t,index:n})]})),a.footer||a.$slots.footer?n("div",{staticClass:"vv-list-footer"},[a._t("footer",[a._v(a._s(a.footer))])],2):a._e(),a.pagination&&"bottom"==a.pagination.position?n("div",{staticClass:"vv-list-pagination"},[a.pagination?n("el-pagination",{staticClass:"pagination",attrs:{background:!!a.pagination.background&&a.pagination.background,small:!!a.pagination.small&&a.pagination.small,layout:"prev, pager, next, jumper","page-size":a.pagination.pageSize?a.pagination.pageSize:10,total:a.pagination.total?a.pagination.total:null,"current-page":a.pagination.currentPage},on:{"current-change":a.currentChange}}):a._e()],1):a._e()],2)}),[],!1,null,"db0b23dc",null);t.default=r.exports}}]);