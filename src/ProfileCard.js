function ProfileCard({title,handle,image,description}){

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pda logo"></img>
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6"> {handle} </p>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>
        </div>    
    );
}

export default ProfileCard;





    //const title=props.title;
    //const handle = props.handle;
    // aşağıda yazılan kod ile tek satırda birleştirme yapılabilir süslü par. içerisindeki tanımlar ile props birleşir ve props.handle yerine geçer.

    //const { title, handle }= props;
    // yukarı satırdaki kod yerine ise profile card içerisindeki props değişkeni yerine {title,handle} yazarak daha da kısa hale getirebilriz.