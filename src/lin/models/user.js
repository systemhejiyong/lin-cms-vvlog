import {
  post,
  get,
  put,
} from '@/lin/plugins/axios'
import { saveTokens, saveAccessToken } from '../utils/token'

const SUPER_VALUE = 2
const ACTIVE_VALUE = 1

export default class User {
  id = null;
  // 当前用户是否在激活状态
  isActive = null

  // 邮箱
  email = null

  // 权限分组id
  groupId = null

  // 用户名
  username = null

  // 是否为超级管理员
  isSuper = null

  // 拥有的权限
  permissions = []

  // 昵称
  nickname = null

  // 分组名称
  groupName = null

  introduction = null

  constructor(active, email, groupId, username, _super, avatar, permissions, nickname, groupName, id, introduction) {
    this.isActive = active === ACTIVE_VALUE
    this.email = email
    this.groupId = groupId
    this.username = username
    this.avatar = avatar
    this.isSuper = _super === SUPER_VALUE
    this.permissions = permissions || []
    this.nickname = nickname
    this.groupName = groupName
    this.id = id;
    this.introduction = introduction
  }

  /**
   * 分配用户
   * @param {object} data 注册信息
   */
  static register(data) {
    return post('cms/user/register', data)
  }

  static registerAccount(data) {
    return post('cms/user/account/register', data)
  }

  /**
   * 登陆获取tokens
   * @param {string} username 用户名
   * @param {string} password 密码
   */
  static async getToken(username, password) {
    const tokens = await post('cms/user/login', {
      username,
      password,
    })
    saveTokens(tokens.access_token, tokens.refresh_token)
    return tokens
  }

  /**
   * 获取当前用户信息，并返回User实例
   */
  static async getInformation() {
    const info = await get('cms/user/information')
    return new User(info.active, info.email, info.group_id, info.username, info.admin, info.avatar, info.permissions, info.nickname, info.group_name, info.id, info.introduction)
  }

  /**
   * 获取当前用户信息和所拥有的权限
   */
  static async getAuths() {
    const info = await get('cms/user/permissions')
    return new User(info.active, info.email, info.group_id, info.username, info.admin, info.avatar, info.permissions, info.nickname, info.group_name, info.id, info.introduction)
  }

  /**
   * 刷新令牌
   */
  static async getRefreshToken() {
    const res = await get('cms/user/refresh')
    saveAccessToken(res.access_token)
  }


  /**
   * 用户修改密码
   * @param {string} newPassword 新密码
   * @param {string} confirmPassword 确认新密码
   * @param {string} oldPassword 旧密码
   */
  static updatePassword({ old_password, new_password, confirm_password }) {
    return put('cms/user/change_password', {
      new_password,
      confirm_password,
      old_password,
    })
  }

  static async getUserByUserId(userId) {
    const res = await get(`cms/user/${userId}`)
    return res;
  }


  static async updateProfile(params) {
    return await put('cms/user', params)
  }

  static async getNovices() {
    return await get('cms/user/novices')
  }
}
