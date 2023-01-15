import cls from './Posts.module.css'
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className={'container ' + cls.posts}>
            <div className="container__content">
                <form className={cls.add_post_form}>
                    <textarea name="" className={'textarea'} placeholder={'Add a post...'}></textarea>
                </form>
                <button className={'button'}>Add Post</button>
                <Post
                    name='Chester Lee'
                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, voluptatum.'
                    img='https://i.pinimg.com/564x/4e/7f/94/4e7f94b81257eeb80e95fe7e16f8ad54.jpg'
                    date=''
                    likes='30'/>

                <Post
                    name='Levi Kim'
                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, dolor fugit ipsum iusto odio provident quam quo rem repellendus tempora tempore temporibus. Distinctio dolorem ducimus ea earum id ipsum libero natus odio quae quas qui quibusdam quidem quos, repudiandae suscipit vel voluptates voluptatibus. Atque autem consequatur corporis dignissimos distinctio dolor doloremque earum eius id illo incidunt ipsa iure iusto labore laboriosam laborum maxime modi nihil officiis omnis possimus quaerat, quasi quod recusandae reiciendis repellendus, reprehenderit. Beatae, eos, suscipit! Dicta ducimus ex illum ipsum itaque iusto natus repellat. Assumenda eligendi, eveniet impedit in labore nobis, omnis quas quis quo rem, sit voluptas voluptatibus! Ab aliquam animi, asperiores culpa debitis doloribus ducimus error explicabo facilis fugiat impedit in non reprehenderit. Aliquid architecto, cumque dicta dolor dolore dolores est harum laudantium molestias nemo nihil numquam officia omnis optio pariatur provident quas quia quos repellat sunt unde vitae voluptate! Dignissimos dolor hic impedit molestias nihil non saepe similique?'
                    img='https://i.pinimg.com/564x/8f/f0/c1/8ff0c1d829f0c83a76f3b3648e298149.jpg'
                    date=''
                    likes='124'/>
            </div>
        </div>
    )
}

export default Posts
