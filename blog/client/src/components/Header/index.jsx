import '../../styles/header.css'

const Header = () => {
    return(
        <div className="header">
            <div className="flex gap-4">
                <div className='flex bg-green-600' id="container-search">
                <i class="fa-solid fa-magnifying-glass my-auto"></i>
                    <input type="text" placeholder='Search' id="search" />
                </div>
                <button className="button" id='btn-filter'><i class="fa-solid fa-filter mr-1"></i>filter</button>
            </div>
            <div className="write">
                <button className="button" id='btn-write'><i class="fa-solid fa-pen-to-square mr-1"></i>write</button>
            </div>
        </div>
    )
}

export default Header