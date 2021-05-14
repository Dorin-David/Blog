import style from '../../styles/components/author-card.module.css';


function AuthorCard(props){
   return (
       <div className={style['author-card']} onClick={props.click}>
           <div><img src={props.img} alt={props.author_name} /></div>
          <div className={style['author-bio']}>
          <h1>{props.author_name}</h1>
           <p>{props.author_bio}</p>
          </div>
       </div>
   )
}

export default AuthorCard