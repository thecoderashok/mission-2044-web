import React from 'react'
import { useClassNames } from '../../hook/useClassNames';
// import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';

const HighlightCard = ({ item, itemIndex }) => {
    const classes = useClassNames();

    return (
        <>
            <div className="feature-item-wrapper">
                <div className={classes("feature-item", item?.style_class)}>
                    {item.icon ? (
                        <div className="icon-wrapper">
                            <span
                                className="icon"
                                style={{
                                    maskImage: `url(/icons/${item.icon})`,
                                    WebkitMaskImage: `url(/icons/${item.icon})`,
                                }}
                            />
                        </div>
                    ) : (
                        <div className="num">
                            <span>{itemIndex + 1}</span>
                        </div>
                    )}

                    <div className="text-content">
                        <h3 className="title-text">{item?.title}</h3>
                        <p className="description">
                            {item?.desc || item?.description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HighlightCard