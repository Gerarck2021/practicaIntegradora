import React from 'react';
import Footer from '../Footer/Footer'
import TopBar from '../TopBar/TopBar'
import ContentRowTop from '../ContentRowTop/ContentRowTop'
function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div className="content">
                <TopBar></TopBar>
                <ContentRowTop></ContentRowTop>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ContentWrapper;