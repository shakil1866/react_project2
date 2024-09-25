/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">

                    {
                        menuList.map((curEle) => {
                            return (
                                <button className="btn-group_item" onClick={() => filterItem(curEle)}>{curEle}</button>
                            )
                        })
                    }

                </div>
            </nav>
        </>
    )
}

export default Navbar;
