import {
  SystemConfig
} from '../config'
import { setItem, getItem} from '../lib/redis'

// 截取字符串，多余的部分用...代替
export let setString = (str, len) => {
  let StrLen = 0
  let s = ''
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 128) {
      StrLen += 2
    } else {
      StrLen++
    }
    s += str.charAt(i)
    if (StrLen >= len) {
      return s + '...'
    }
  }
  return s
}

// 格式化设置
export let OptionFormat = (GetOptions) => {
  let options = '{'
  for (let n = 0; n < GetOptions.length; n++) {
    options = options + '\'' + GetOptions[n].option_name + '\':\'' + GetOptions[n].option_value + '\''
    if (n < GetOptions.length - 1) {
      options = options + ','
    }
  }
  return JSON.parse(options + '}')
}

// 替换SQL字符串中的前缀
export let SqlFormat = (str) => {
  if (SystemConfig.mysql_prefix !== 'api_') {
    str = str.replace(/api_/g, SystemConfig.mysql_prefix)
  }
  return str
}

// 数组去重
export let HovercUnique = (arr) => {
  let n = {}
  let r = []
  for (var i = 0; i < arr.length; i++) {
    if (!n[arr[i]]) {
      n[arr[i]] = true
      r.push(arr[i])
    }
  }
  return r
}

// 获取json长度
export let getJsonLength = (jsonData) => {
  var arr = []
  for (var item in jsonData) {
    arr.push(jsonData[item])
  }
  return arr.length
}

// 格式化返回
export let res = (data = null, msg = null, code = 0) => {
  return {
    data: data,
    msg: msg,
    code: code
  }
}

//表单检测空值
export let notNull = (val, name) => {
  if (val === null || val === undefined || val === '') {
    let error = {
      statusCode: 500,
      msg: `${name}不能为空！`,
      code: -2
    }
    throw error
  } else {
    return val
  }
}

//检测空数组
export let isEmptyArr = (arr) => {
  return Array.isArray(arr) && arr.length === 0
}

export let createRandomId = (length = 3) => {
  return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}

export let checkCap = async (capId, capCode) => {
  // 参数有问题
  if (!capCode || !capId) {
    let error = {
      msg: '请输入验证码！',
      code: -4
    }
    throw error
  }
  // 验证码不符
  if (capCode != await getItem(capId)) {
    let error = {
      msg: '验证码错误！',
      code: -3
    }
    throw error
  }
  // 验证通过后失效
  if (capCode == await getItem(capId)) {
    setItem(capId, null)
    return true
  }
} 