/*
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { TemplateResult } from '@spectrum-web-components/base';
import { AccordionMarkup } from './';

export default {
    title: 'Accordion/Densities/Compact',
    component: 'sp-accordion',
};

export const s = (): TemplateResult =>
    AccordionMarkup({ density: 'compact', size: 's' });
export const m = (): TemplateResult =>
    AccordionMarkup({ density: 'compact', size: 'm' });
export const l = (): TemplateResult =>
    AccordionMarkup({ density: 'compact', size: 'l' });
export const xl = (): TemplateResult =>
    AccordionMarkup({ density: 'compact', size: 'xl' });
