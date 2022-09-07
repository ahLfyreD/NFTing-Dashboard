import NFTingLogo from '@asset/images/NFTingFooter.png'
import { FooterIconData } from './FooterIconData';
import { FooterMarketplaceData } from './FooterMarketplaceData';
import { FooterResourceData } from './FooterResourceData';
import { FooterCompanyData } from './FooterCompanyData';

const Footer = () => {
    return (
        <div style={{ height: 500, padding: 50, paddingLeft: 100, position: 'relative', background: '#1f1b3d' }}>
            <div className="row justify-content-center" style={{ height: 'fit-content', }}>
                <div className="col-6">
                    <img src={NFTingLogo} alt="" style={{ height: 40, width: 140, }} />
                    <div>
                        <h5 style={{ fontSize: 12, width: 350, height: 'fit-content', fontFamily: 'nunito', margin: '10px 0', lineHeight: 2, color: 'white' }}>
                            Multichain NFT aggregator with built in marketplace functionalities,
                            user recommendation, in-depth filters, added NFT utilities, data dashboard,
                            and multilingual support.
                        </h5>
                        <div className='d-flex' style={{ width: 350, height: 'fit-content', }}>
                            {FooterIconData.map((item, index) => {
                                return (
                                    <span key={index} style={{ cursor: 'pointer', marginRight: 20, fontSize: 25, color: 'white' }}>
                                        {item.icon}
                                    </span>

                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <h5 style={{
                            fontSize: 12, fontFamily: 'nunito',
                            margin: '10px 0', textDecoration: 'none',
                            color: 'white'
                        }}>
                            Marketplace
                        </h5>
                        <div>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: 30, }}>
                                {FooterMarketplaceData.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <h5 className='footer-links'
                                                style={{
                                                    fontSize: 12, fontFamily: 'nunito',
                                                    margin: '10px 0', width: 'fit-content',
                                                    height: 'fit-content', color: 'white', cursor: 'pointer',

                                                }}>
                                                {item.name}
                                            </h5>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <h5 style={{
                            fontSize: 12, fontFamily: 'nunito',
                            margin: '10px 0', textDecoration: 'none',
                            color: 'white'
                        }}>
                            Resources
                        </h5>
                        <div>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: 30, }}>
                                {FooterResourceData.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <h5 className='footer-links'
                                                style={{
                                                    fontSize: 12, fontFamily: 'nunito',
                                                    margin: '10px 0', width: 'fit-content',
                                                    height: 'fit-content', color: 'white', cursor: 'pointer',

                                                }}>
                                                {item.name}
                                            </h5>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div></div>
                <div className="col">
                    <div>
                        <h5 style={{
                            fontSize: 12, fontFamily: 'nunito',
                            margin: '10px 0', textDecoration: 'none',
                            color: 'white'
                        }}>
                            Company
                        </h5>
                        <div>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: 30, }}>
                                {FooterCompanyData.map((item, index) => {
                                    return (
                                        <li key={index} >
                                            <h5 className='footer-links'
                                                style={{
                                                    fontSize: 12, fontFamily: 'nunito',
                                                    margin: '10px 0', width: 'fit-content',
                                                    height: 'fit-content', color: 'white', cursor: 'pointer',

                                                }}>
                                                {item.name}
                                            </h5>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;