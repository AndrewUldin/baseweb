// @flow
import * as React from 'react';
import {StatefulMenu, OptionProfile} from 'baseui/menu';

const ITEMS = [...new Array(4)].map(() => ({
  title: 'David Smith',
  subtitle: 'Senior Engineering Manager',
  body: 'Uber Everything',
  imgUrl: 'https://via.placeholder.com/60x60',
}));

export default () => (
  <StatefulMenu
    items={ITEMS}
    overrides={{
      List: {
        style: {
          width: '350px',
        },
      },
      Option: {
        component: OptionProfile,
        props: {
          getProfileItemLabels: ({title, subtitle, body}) => ({
            title,
            subtitle,
            body,
          }),
          getProfileItemImg: item => item.imgUrl,
          getProfileItemImgText: item => item.title,
        },
      },
    }}
  />
);
