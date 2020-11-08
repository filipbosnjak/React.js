import React , {useState} from 'react'

const Picture = (props) => {

    //Title, authorScreenName, datum objave, description.

    let { imgUrl , title , authorScreenName , createdOn , description } = props

    const [viewed , setViewed] = useState(false)

    const [deleted , setDeleted] =  useState(false)

    return (
        <React.Fragment>
        { !deleted ? 
        <div className="picture">
            <img src={imgUrl} alt=""/>
            <div className="info">
                <div className="title">{title}</div>
                <div>{authorScreenName}</div>
                <div className="date">{createdOn}</div>
                <div>{description}</div>

                <button className={viewed ? 'red' : 'green'} 
                        onClick={ () => {
                            setViewed( (current) => !current)
                }}>{viewed ? 'Viewed' : 'Not Viewed'}</button>
                
                <button onClick={()=>{
                    setDeleted( (current) => !current)
                }}>Delete Picture</button>
            </div>
        </div>
            : null}
        </React.Fragment>
    )
}
export default Picture;