// @ts-check
/*
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import {
    builder,
    converterFor,
} from '../../../tasks/process-spectrum-utils.js';

const converter = converterFor('');

/**
 * @type { import('../../../tasks/spectrum-css-converter').SpectrumCSSConverter }
 */
const config = {
    conversions: [
        {
            inPackage: '@spectrum-css/tray',
            outPackage: 'tray',
            fileName: 'tray-wrapper',
            components: [
                converter.classToHost('spectrum-Tray-wrapper'),
                converter.classToAttribute('is-open', 'open'),
            ],
            excludeByComponents: [builder.class('spectrum-Tray')],
        },
        {
            inPackage: '@spectrum-css/tray',
            outPackage: 'tray',
            fileName: 'tray',
            hoistCustomPropertiesFrom: 'spectrum-Tray',
            components: [
                {
                    find: [
                        builder.class('spectrum-Tray'),
                        builder.class('is-open'),
                    ],
                    replace: [
                        {
                            replace: builder.attribute('open'),
                            hoist: true,
                        },
                        {
                            replace: {
                                type: 'combinator',
                                value: 'descendant',
                            },
                        },
                        {
                            replace: builder.class('tray'),
                        },
                    ],
                },
                converter.classToClass('spectrum-Tray', 'tray'),
                converter.classToSlotted('spectrum-Dialog'),
                converter.classToAttribute('is-open', 'open'),
            ],
            excludeByComponents: [builder.class('spectrum-Tray-wrapper')],
        },
    ],
};

export default config;
