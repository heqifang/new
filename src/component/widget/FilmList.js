import React from 'react';
import { connect } from 'react-redux';
import { List, Avatar, Icon } from 'antd';
import { types, actions } from '../../core/actions';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const mapStateToProps = (state) => {
  return {
    movie:state.movie
  }
}

// const mapDispatchToProps = (dispatch,ownProps) => {
//   return {
//     onClick: () => {
//       dispatch({
//         type: 'SET_VISIBILITY_Movie',
//         filter: ownProps.filter
//       });
//     }
//   };
// }

@connect(mapStateToProps)
class FilmList extends React.Component {
  componentDidMount(){
    this.props.dispatch(actions.startFetch())
  }
  render() {
    console.log(this.props);
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={this.props.movie.allArr}
        renderItem={item => (
          <List.Item
            key={item.titleCn}
            actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
            extra={<img width={272} alt="logo" src={item.img} />}
          >
            <List.Item.Meta
              title={`${item.titleCn} --> ${item.titleEn}`}
              description={`导演：${item.directorName};主演：${item.actorName1},${item.actorName2}`}
            />
            {`类型：${item.type}`}
            {item.commonSpecial}
          </List.Item>
        )}
      />
    )
  }
  
}

export default FilmList;