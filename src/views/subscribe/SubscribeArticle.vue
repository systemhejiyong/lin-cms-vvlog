<template>
  <div>
    <el-row :gutter="24">
        <div>
          <article-list :dataSource="dataSource"></article-list>
        </div>
        <el-backtop></el-backtop>
        <infinite-loading @infinite="infiniteHandler" spinner="bubbles" :identifier="any">
          <span slot="no-more">
            <el-divider class="lin-divider">我也是有底线的...</el-divider>
          </span>
          <span slot="no-results">
            <el-divider class="lin-divider">暂无随笔...</el-divider>
          </span>
        </infinite-loading>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArticleList from "@/views/article/ArticleList";
import InfiniteLoading from "vue-infinite-loading";
import articleApi from "@/models/article";
import { SubscribeUserList } from "@/views/subscribe";

export default {
  name: "HomeIndex",
  components: { ArticleList, InfiniteLoading, SubscribeUserList },
  data() {
    return {
      count: 20,
      dataSource: [],
      pagination: {
        currentPage: 0,
        pageSize: 10,
        pageTotal: 0
      },
      loading: false,
      any: new Date()
    };
  },
  mounted() {},
  computed: {},
  watch: {
    $route(v) {
      console.log(v);
      this.refresh();
    }
  },
  methods: {
    async refresh() {
      this.pagination.currentPage = 0;
      this.any = new Date();
      await this.infiniteHandler();
    },
    async infiniteHandler($state) {
      let res;
      const currentPage = this.pagination.currentPage;
      res = await articleApi.getSubscribeArticles({
        count: this.pagination.pageSize,
        page: currentPage
      });
      let items = [...res.items];

      if (items.length == 0) {
        $state && $state.complete();
      } else {
        if (currentPage == 0) {
          this.dataSource = items;
        } else {
          this.dataSource = this.dataSource.concat(items);
        }
        this.pagination.currentPage += 1;
        this.pagination.pageTotal = res.total;

        $state && $state.loaded();
      }
    },
    onChange(val) {
      this.$router.push("/index?sort=" + val);
    }
  }
};
</script>

<style scoped lang="scss">
.el-form-item {
  margin-bottom: 0px !important;
}
</style>
