import models from '../models/index'
import { res, notNull } from '../tool/Common'
import validator from 'validator'
// validator中的参数加''是因为 validator 只校验String
export let secondeHandCollect = async (ctx) => {
  let body = ctx.request.body,
    model = notNull(body.model, '型号'),
    volume = notNull(body.volume, '容量'),
    quality = notNull(body.quality, '成色'),
    targetPrice = notNull(body.targetPrice, '期望价位'),
    phoneNumber = notNull(body.phoneNumber, '联系方式'),
    userId = ctx.state.user.userInfo.userId
  if (!validator.isMobilePhone(phoneNumber + '', 'zh-CN')) {
    let error = {
      msg: '号码格式错误！',
      code: -2
    }
    throw error
  }
  let result = await models.secondHand.shDB.create({ userId, model, volume, quality, targetPrice, phoneNumber })
  ctx.body = res({ id: result.id }, '添加成功')
}

export let addEnterprisePurchase = async (ctx) => {
  // let rusult = await models.company.default.sync()
  let body = ctx.request.body,
    companyDetail = notNull(body.companyDetail, '企业信息'),
    needDetail = notNull(body.needDetail, '需求信息'),
    companyName = notNull(companyDetail.companyName, '公司名称'),
    companyContact = notNull(companyDetail.companyContact, '企业联系人'),
    companyContactPhoneNumber = notNull(companyDetail.companyContactPhoneNumber, '企业联系人电话'),
    tradeMode = notNull(companyDetail.tradeMode, '交易方式'),
    model = notNull(needDetail.model, '型号'),
    volume = notNull(needDetail.volume, '容量'),
    quality = notNull(needDetail.quality, '成色'),
    targetPrice = notNull(needDetail.targetPrice, '期望价位'),
    num = notNull(needDetail.num, '数量'),
    userId = ctx.state.user.userInfo.userId
  if (!validator.isMobilePhone(companyContactPhoneNumber + '', 'zh-CN')) {
    let error = {
      msg: '号码格式错误！',
      code: -2
    }
    throw error
  }
  let result = await models.company.default.create({ userId, companyName, companyContact, companyContactPhoneNumber, tradeMode, model, volume, quality, targetPrice, num })
  ctx.body = res({ id: result.id }, '添加成功！')
}

export let addRecoveryRecord = async (ctx) => {
  let body = ctx.request.body,
    model = notNull(body.model, '机器型号'),
    volume = notNull(body.volume, '容量'),
    country = notNull(body.country, '国家'),
    display = notNull(body.display, '屏幕状况'),
    border = notNull(body.border, '边框状况'),
    warranty = notNull(body.warranty, '保修情况'),
    repairCase = notNull(body.repairCase, '进水或拆修'),
    otherCase = body.otherCase,
    phoneNumber = notNull(body.phoneNumber, '联系方式'),
    userId = ctx.state.user.userInfo.userId
  let result = await models.recovery.default.create({ userId, model, volume, country, display, border, warranty, repairCase, otherCase, phoneNumber })
  ctx.body = res({ id: result.id }, '添加成功！')
}
