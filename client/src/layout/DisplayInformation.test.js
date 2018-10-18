import React from 'react';
import DisplayInformation from './DisplayInformation';
import Enzyme, {shallow, render, mount} from 'enzyme';

it("renders correctly", () => {
    const wrapper = shallow(
        <DisplayInformation 
            title="Ninja™ Professional Blender with Single Serve Blending Cups"
            images={["0"]}
        />
    )

    expect(wrapper).toMatchSnapshot();
})

it("renders child", () => {
    const wrapper = mount(
        <DisplayInformation 
            title="Ninja™ Professional Blender with Single Serve Blending Cups"
            images={
                    {
                            "AlternateImages": [{
                                    "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt01"
                                },
                                {
                                    "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt02"
                                },
                                {
                                    "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt03"
                                },
                                {
                                    "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt04"
                                },
                                {
                                    "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt05"
                                },
                                {
                                    "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt06"
                                },
                                {
                                    "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt07"
                                }
                            ],
                            "PrimaryImage": [{
                                "image": "http:\/\/target.scene7.com\/is\/image\/Target\/14263758"
                            }]
                        }
                    }
        />
        
    )

    const text = wrapper.find("h2").first().text();
    
    expect(text).toEqual("Ninja™ Professional Blender with Single Serve Blending Cups")
})