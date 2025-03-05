/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import type { Meta } from '@storybook/web-components';
import { TemplateResult } from '@spectrum-web-components/base';
import {
    renderButtonSet,
    renderLink,
    renderLinkWithTarget,
    renderMinWidthButton,
    renderWithIcon,
    renderWithIconOnly,
} from './index.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-help.js';
import { args } from './index.js';
import { argTypes } from './args.js';
export type { Properties } from './args.js';

const meta: Meta<Properties> = {
    component: 'sp-button',
    title: 'Button/Primary/Outline',
    args: {
        ...args,
        variant: 'primary',
        treatment: 'outline',
    },
    argTypes,
};

export const Default = (props: Properties): TemplateResult =>
    renderButtonSet(props);

export const withIcon = (props: Properties): TemplateResult =>
    renderWithIcon(props);

export const withIconOnly = (props: Properties): TemplateResult =>
    renderWithIconOnly(props);

export const minWidthButton = (props: Properties): TemplateResult =>
    renderMinWidthButton(props);

minWidthButton.storyName = 'min-width';

export const link = (props: Properties): TemplateResult => renderLink(props);

link.storyName = 'href';

export const linkWithTarget = (props: Properties): TemplateResult =>
    renderLinkWithTarget(props);

linkWithTarget.storyName = 'href with target="_blank"';

export default meta;
