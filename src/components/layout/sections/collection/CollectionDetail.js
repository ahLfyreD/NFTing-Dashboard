import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai'


const collectionDetail = () => {
    return (
        <div className="profile">
            {/* {Object.keys(profile).length === 0 ? (
                <div className="section-title">...Loading</div>
            ) : ( */}
                <>

                    <div>
                        <div className="jumbotron text-center position-relative">
                            <div className="position-relative h-100 profile-cover-image-container">
                                <div className="profile-cover-image" style={{ background: '#def3fc', width: '100%', height: '100%' }}></div>
                            </div>
                            <div className="profile-owner-image-container" >
                                <div className="profile-owner-image position-absolute" style={{ background: '#def3fc', backgroundSize: 'cover', backgroundPosition: '50%', border: '2px solid #fff', height: 150, width: 150, borderRadius: '50%', bottom: -75, left: 10, }}>
                                </div>
                            </div>
                        </div>
                        <div className="nft-action-buttons d-flex justify-content-end align-items-center">
                            <button type="button" className="primary-button btn-follow me-4 shadow-none btn btn-secondary">Add to Watchlist</button>
                            <button type="button"
                                    className="btn-share-icon d-flex justify-content-center
                                     align-items0center me-4 btn btn-outline-primary"
                                    style={{border: "3px solid #433895"}}>
                                <BiIcons.BiRefresh />
                            </button>
                        </div>
                        <div className="nft-header-details">
                            <div className="profile-owner-info">
                                <h2 className="name">name</h2>
                            </div>
                            <div className="mt-2 mb-3">
                                <h5 className="mb-0">By username</h5>
                            </div>
                            <div className="nft-bio"></div>
                            <div></div>
                            <div className="stats row">
                                <div className="col-sm-6 col-md-auto">
                                    <button className="btn btn-transparent shadow-none p-0" type="button">
                                        Items
                                        <span className="stat-value"></span>
                                    </button>
                                </div>
                                <div className="col-sm-6 col-md-auto">
                                    <button className="btn btn-transparent shadow-none p-0" type="button">
                                        Profile
                                        <span className="stat-value"></span>
                                    </button>
                                </div>
                                <div className="col-sm-6 col-md-auto">
                                    <button className="btn btn-transparent shadow-none p-0" type="button">
                                        Floor Price
                                        <span className="stat-value"></span>
                                    </button>
                                </div>
                                <div className="col-sm-6 col-md-auto">
                                    <button className="btn btn-transparent shadow-none p-0" type="button">
                                        Volume
                                        <span className="stat-value"></span>
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                        <div className="nft-collections gx-0 row">
                            <div className="p-3" >
                                <div className="">
                                    <div>
                                        <div className="d-flex align-items-center row">
                                            <div className="col-sm-6">
                                                <h2 className="section-title mb-0">Items</h2>
                                            </div>
                                            <div className="search-container col-sm-6">
                                                <div className="d-flex p-1 rounded rounded-3  border border-2">
                                                    <input
                                                        className="form-input pl-1 bg-transparent "
                                                        type="search"
                                                        placeholder="Search by Name"
                                                    />
                                                    <div className="d-flex justify-content-center align-items-center rounded-r-md h-12 w-10">
                                                        <AiIcons.AiOutlineSearch className="search-icon" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm 12">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </>
            {/* )} */}

        </div>
    )
}

export default collectionDetail