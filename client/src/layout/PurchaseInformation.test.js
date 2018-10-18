import React from 'react';
import PurchaseInformation from './PurchaseInformation';
import Enzyme, {shallow, render, mount} from 'enzyme';

it("updates state.quantity", () => {
    const wrapper = mount(
        <PurchaseInformation 
            price = {{
                "formattedPriceValue":
                    "$139.99",
                "priceQualifier":
                    "Online Price"
            }
            }
            promotions = {[
                {
                    "Description": [{
                        "shortDescription": "Desc 1"
                    }]
                },
                {
                    "Description": [{
                        "shortDescription": "Desc 2"
                    }]
                }
            ]
            }
            purchasingChannelCode = {
                "0"
            }
            returns = {
                "refund/exchange policy<br/><br/><p style=\"font-size:13px;\">Most unopened items in new condition returned within 90 days will receive a refund or exchange. Some items have a modified return policy that is less than 90 days.&nbsp;Those items will either show a \"return by\" date or \"return within\" day range under the item on your receipt or packing slip and in the \"Item details, shipping\" tab if purchased on Target.com. Items that are opened or damaged or do not have a packing slip or receipt may be..."
            }
        />
    )

    const quantityBox = wrapper.find(".quantityBox");
    const quantityCounter = quantityBox.find("div").first();
    const upButton = quantityCounter.find(".upButton");

    upButton.simulate('click');
    expect(wrapper.state().quantity).toEqual(2);
})