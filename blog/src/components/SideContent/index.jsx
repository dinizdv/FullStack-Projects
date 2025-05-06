import Person from '../../assets/person.png'
import '../../styles/sideContent.css'

const SideContent = () => {
    return(
        <div id="container-side-content">
            <div className="container-trending-topics">
                <div className="flex justify-between items-center">
                    <h1>trending topics</h1>
                    <a href="">See more</a>
                </div>
                
                {/* trends */}
                <div className="flex flex-col gap-4">
                    
                    <div className="trending-topics">
                        <div className="flex gap-2 items-center">
                            <div className="container-img-person"><img src={Person} alt="" /></div>
                            <span>name</span>
                            <span>- theme</span>
                        </div>
                        <h2 className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                    </div>

                    <div className="trending-topics">
                        <div className="flex gap-2 items-center">
                            <div className="container-img-person"><img src={Person} alt="" /></div>
                            <span>name</span>
                            <span>- theme</span>
                        </div>
                        <h2 className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                    </div>

                    <div className="trending-topics">
                        <div className="flex gap-2 items-center">
                            <div className="container-img-person"><img src={Person} alt="" /></div>
                            <span>name</span>
                            <span>- theme</span>
                        </div>
                        <h2 className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default SideContent