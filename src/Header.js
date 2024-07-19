import { Helmet } from 'react-helmet';
import avatar from './img/avatar.png';
import hr from './img/hr.png';
import IconWithTooltipAndCopy from './IconWithTooltipAndCopy';

export default function Header() {
    return(
        <div style={{backgroundColor: 'hsl(98 ,9%, 22%)'}}>
            <Helmet>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous" />
            </Helmet>
            <div className="container" style={{width: 550, height: 300}}>
                <div className="row">
                    <div className="container-fluid col-6" id="header">
                        <br />
                        <div style={{padding:' 30px'}}>
                            <img alt='avatar' src={avatar} style={{display: 'block', margin: 'auto', borderRadius:'50%'}} width="155px"/>
                        </div>

                        <div>
                        <svg aria-hidden="true" style={{position: 'absolute', width: 0, height: 0, overflow: 'hidden'}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <symbol id="icon-mail4" viewBox="0 0 32 32">
                                    <path fill="#ddd" d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM8 8h16c0.286 0 0.563 0.061 0.817 0.177l-8.817 10.286-8.817-10.287c0.254-0.116 0.531-0.177 0.817-0.177zM6 22v-12c0-0.042 0.002-0.084 0.004-0.125l5.864 6.842-5.8 5.8c-0.045-0.167-0.069-0.34-0.069-0.517zM24 24h-16c-0.177 0-0.35-0.024-0.517-0.069l5.691-5.691 2.826 3.297 2.826-3.297 5.691 5.691c-0.167 0.045-0.34 0.069-0.517 0.069zM26 22c0 0.177-0.024 0.35-0.069 0.517l-5.8-5.8 5.865-6.842c0.003 0.041 0.004 0.083 0.004 0.125v12z"></path>
                                </symbol>
                                <symbol id="icon-facebook" viewBox="0 0 32 32">
                                    <path fill="#ddd" d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
                                </symbol>
                                <symbol id="icon-twitter" viewBox="0 0 32 32">
                                    <path fill="#ddd" d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
                                </symbol>
                            </defs>
                        </svg>
                        { IconWithTooltipAndCopy() }　
                        <a href="https://www.facebook.com/profile.php?id=100084104310249" style={{color:'black'}}>
                            <svg className="icon icon-facebook"><use xlinkHref="#icon-facebook"></use></svg>
                        </a>　
                        <a href="https://twitter.com/a7792301" style={{color:'black'}}>
                            <svg className="icon icon-twitter"><use xlinkHref="#icon-twitter"></use></svg>
                        </a>
                        </div>
                    </div>
                    <div className="col-6" style={{padding: '60px 0px 60px 0px', color:'white'}}>
                        <p>▂▂▂</p>
                        <p>
                            Artist ｜申煙<br />
                            -<br />
                            隨緣接稿<br />
                            ⚠️請勿轉載、二次加工修改利用<br />
                        </p>
                        <p>▂▂▂</p>
                    </div>
                </div>
            </div>

            <img alt='hr' src={hr} style={{display: 'block', margin: 'auto'}} />
            <br />
        </div>
    );
}
