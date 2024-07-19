import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='App'>
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-2">
                            <ul className="nav nav-pills flex-column">
                                <li className="nav-item">
                                <Link className="nav-link active" to='#'>Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to='commission'>Commission</Link>
                                </li>
                                <li className="nav-item">
                                <a className='nav-link' href='https://forms.gle/p8YqShe1n71fTZur9'>Form</a>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="col-md-10" style={{padding:'40px 60px'}}>
                            <dl>
                                <dt>▌委託相關</dt>
                                <dd>　　▪︎　委託以非商用Q版原創與模板為主</dd>
                                <dd>　　▪︎　報價隨設定複雜度與需求浮動</dd>
                                <dd>　　▪︎　稿件皆默認上浮水印後可作為委託範例公開</dd>
                                <dd>　　▪︎　如有其他需求請詢問，例如：急單、商用、打印、買斷等</dd>
                                <dd>　　▪︎　任何未提及項目歡迎自帶價詢問，非擅長範圍視情況接取</dd>
                                <br />
                                <dt>▌委託流程</dt>
                                <dd>　　構圖討論與排期確定 → 付款 → 作畫與稿件進度確認 → 透過雲端硬碟交付稿件</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
