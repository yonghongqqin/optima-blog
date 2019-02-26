import { Card, } from 'antd'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { headerImg } from '../../../common'
import './style.less'

const { Meta } = Card
interface ITag {
  title: string
  color: string
}
export interface IInfo {
  classList: string[]
  tag: ITag[]
  ArticleNum: string
  access: number
  present: string
  name: string
  authorImg: string
  lastArticle: any[]
}
export interface IProps {
  info: IInfo
  fetchArticle: (payload: object) => void
}
const Sidebar = (props: IProps) => {
  const {
   
    present,
    access,
    ArticleNum,
    name,
    authorImg,
    lastArticle
  } = props.info
  return (
    <div className="Sidebar">
      <Card hoverable={true} className="card" cover={<img src={headerImg} />}>
        <div className="authorImg">
          <img src={authorImg} alt="" />
        </div>
        <Meta
          title={
            <div>
              <span className="card-title">{name}</span>
            </div>
          }
          description={
            <div>
              <p className="abstract">{present}</p>
              <p className="abstract">
                <span>Articles - {ArticleNum}</span>
                <span style={{ marginRight: 10, marginLeft: 10 }}>|</span>
                <span>PV - {access}</span>
              </p>
            </div>
          }
        />
      </Card>
  
      <Card title="article list" hoverable={true} className="card">
        <ul>
          {lastArticle &&
            lastArticle.map((item, index) => (
              <li key={index} className="tag">
                <Link to={`/article/${item._id}`}>{item.title}</Link>
              </li>
            ))}
        </ul>
      </Card>
    </div>
  )
}

export default Sidebar
