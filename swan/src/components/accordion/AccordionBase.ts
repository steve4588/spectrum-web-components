/*
Copyright 2025 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { PropertyValues, type TemplateResult } from 'lit';
import { SpectrumElement } from '../../base/Base.js';
import { SizedMixin } from '../../base/sizedMixin.js';
import { property, queryAssignedNodes } from '../../base/decorators.js';
import { FocusGroupController } from '../../reactive-controllers/FocusGroup.js';

import type { AccordionItemBase } from './AccordionItemBase.js';

/**
 * Base class for Accordion components
 * @element sp-accordion
 * @slot - The sp-accordion-item children to display.
 */
export abstract class AccordionBase extends SizedMixin(SpectrumElement, {
    noDefaultSize: true,
}) {
    /**
     * Allows multiple accordion items to be opened at the same time
     */
    @property({ type: Boolean, reflect: true, attribute: 'allow-multiple' })
    public allowMultiple = false;

    /**
     * Sets the spacing between the content to borders of an accordion item
     */
    @property({ type: String, reflect: true })
    public density?: 'compact' | 'spacious';

    @queryAssignedNodes()
    private defaultNodes!: NodeListOf<AccordionItemBase>;

    protected get items(): AccordionItemBase[] {
        return [...(this.defaultNodes || [])].filter(
            (node: HTMLElement) => typeof node.tagName !== 'undefined'
        ) as AccordionItemBase[];
    }

    focusGroupController = new FocusGroupController<AccordionItemBase>(this, {
        direction: 'vertical',
        elements: () => this.items,
        isFocusableElement: (el: AccordionItemBase) => !el.disabled,
    });

    public override focus(): void {
        this.focusGroupController.focus();
    }

    protected async onToggle(event: Event): Promise<void> {
        const target = event.target as AccordionItemBase;
        // Let the event pass through the DOM so that it can be
        // prevented from the outside if a user so desires.
        await 0;
        if (this.allowMultiple || event.defaultPrevented) {
            // No toggling when `allowMultiple` or the user prevents it.
            return;
        }
        const items = [...this.items] as AccordionItemBase[];
        /* c8 ignore next 3 */
        if (items && !items.length) {
            // no toggling when there aren't items.
            return;
        }
        items.forEach((item) => {
            if (item !== target) {
                // Close all the items that didn't dispatch the event.
                item.open = false;
            }
        });
    }

    protected handleSlotchange(): void {
        this.focusGroupController.clearElementCache();
        this.items.forEach((item) => {
            item.size = this.size;
        });
    }

    protected override updated(changed: PropertyValues<this>): void {
        super.updated(changed);
        if (
            changed.has('size') &&
            (!!changed.get('size') || this.size !== 'm')
        ) {
            this.items.forEach((item) => {
                item.size = this.size;
            });
        }
    }

    /**
     * Render method to be implemented by subclasses
     */
    protected abstract override render(): TemplateResult;
}
