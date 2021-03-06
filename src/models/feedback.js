import {defineModel} from '../lib/sequelize'
import Sequelize from 'sequelize'

export const feddbackDB = defineModel('pss_feedback', {
    userId: Sequelize.STRING,
    name: Sequelize.STRING, //姓名
    email: Sequelize.STRING, //邮箱
    feedback: Sequelize.STRING, //意见内容
    replyStatus:{
      type: Sequelize.INTEGER,
      allowNull: true
    }, //回复状态
    replyText: {
      type: Sequelize.STRING,
      allowNull: true
    } //回复内容
});
