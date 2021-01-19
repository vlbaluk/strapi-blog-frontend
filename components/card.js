import React from "react";
import Link from "next/link";
import Image from "./image";
import Moment from "react-moment";
import {getStrapiMedia} from "../lib/media";

const Card = ({article}) => {
    console.log(article)
    return (
        <Link as={`/article/${article.slug}`} href="/article/[id]">
            <a className="uk-link-reset ">
                <div className="uk-card uk-card-muted post-preview">
                    <div className="uk-card-media-top post-preview-image"
                         style={{"background-image": "url(\"" + getStrapiMedia(article.image) + "\")"}}>
                        {/*<Image image={article.image}/>*/}

                    </div>
                    <div className="post-preview-content">
                        <Link as={`/article/${article.slug}`} href="/article/[id]">
                            <p id="title" className="post-preview-title">
                                {article.title}
                            </p>
                        </Link>
                        <Link as={`/article/${article.slug}`} href="/article/[id]">
                            <p id="description" className="post-preview-description">
                                {article.description}
                            </p>
                        </Link>
                        <table className="post-meta  post-preview-meta custom" cellPadding="0" cellSpacing="0">
                        <tr>
                            <td className="post-meta-item post-date">                <Moment format="MMM DD ' YY">{article.published_at}</Moment></td>
                            <td className="post-meta-item icon"><svg role="img" width="14" height="20" viewBox="0 0 14 20" fill="none" strokeWidth="1" stroke="#000" xmlns="http://www.w3.org/2000/svg" className="svgIcon"><path d="M7.47092 13.7982L7.32727 13.6656H7.13176H2.14118C1.22171 13.6656 0.5 12.944 0.5 12.0679V6.09766C0.5 5.22165 1.22171 4.5 2.14118 4.5H11.8588C12.7783 4.5 13.5 5.22165 13.5 6.09766V12.0679C13.5 12.944 12.7783 13.6656 11.8588 13.6656H10.5412H10.0412V14.1656V16.1657C10.0392 16.1649 10.0339 16.1625 10.0255 16.1565L7.47092 13.7982Z" stroke="#999999"></path></svg></td>
                            <td className="post-meta-item icon"><svg role="img" width="15" height="20" viewBox="0 0 15 20" fill="none" strokeWidth="1" stroke="#000" xmlns="http://www.w3.org/2000/svg" className="svgIcon"><path d="M1.73624 5.1145C2.43974 4.37137 3.37095 4 4.3036 4C5.23626 4 6.16745 4.37137 6.87097 5.1145L7.49949 5.77892L8.1227 5.11986C9.52973 3.63357 11.8557 3.6336 13.2627 5.11986C14.6698 6.60612 14.6698 8.98642 13.2627 10.4727C11.4639 12.3728 9.66583 14.2737 7.86703 16.1738C7.81927 16.2242 7.76183 16.2643 7.6982 16.2918C7.63456 16.3192 7.56606 16.3333 7.49683 16.3333C7.42761 16.3333 7.3591 16.3192 7.29547 16.2918C7.23184 16.2643 7.1744 16.2242 7.12664 16.1738L5.77904 14.7472L3.08384 11.8939L1.73624 10.4673C0.331003 8.98011 0.329213 6.60074 1.73624 5.1145Z" stroke="#999999"></path></svg></td>
                        </tr>
                        </table>
                        {/*<p id="category" className="uk-text-uppercase">*/}
                        {/*    {article.category.name}*/}
                        {/*</p>*/}

                    </div>
                </div>
            </a>
        </Link>
    );
};

export default Card;
