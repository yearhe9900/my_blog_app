import React, { Component } from 'react';
import {Card} from 'antd';

var content = `
<p><strong>
<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544777028207&di=73d99c1826cdce6b6d7ab95011424951&imgtype=0&src=http%3A%2F%2Fs1.51cto.com%2Fwyfs02%2FM01%2F88%2F7F%2FwKiom1f55HCSS-DrAACSkyHme8o914.png-wh_651x-s_1436211364.png" alt="" />234</strong></p>
<p><em><strong>2342</strong></em></p>
<p>&nbsp;</p>
<p><em><strong>2342</strong></em></p>
<p>&nbsp;</p>
<p><em><strong>2342</strong></em></p>
<p>&nbsp;</p>

<p><em><strong>2342</strong></em></p>
<p>&nbsp;</p>
<p><em><strong>2342</strong></em></p>
<p>&nbsp;</p>
<p><em><strong>2342</strong></em></p>
<p>&nbsp;</p>

<p><em><strong>2342</strong></em></p>
<p>&nbsp;</p>

<p><em><strong>2342</strong></em></p>
<p>&nbsp;</p>

<p><em><strong>2342</strong></em></p>
<p>&nbsp;</p>

<p><em><strong>2342</strong></em></p>
<p>&nbsp;</p>

<p><em><strong>2342</strong></em></p>
<p>&nbsp;</p>
<p><em><strong>2342</strong></em></p>
<p>&nbsp;</p>
<p><em><strong>2342</strong></em></p>
<p>&nbsp;</p>
`

export default class BlogContent extends Component {
    render() {
        return (
            <div style={{ background: '#ECECEC', padding: '20px' }}>
            <Card title={'内容'} bordered={true}>
                <h1>{this.props.match.params.id}</h1>
                <div dangerouslySetInnerHTML = {{ __html:content }}></div>
            </Card>
            </div>
        )
    }
}