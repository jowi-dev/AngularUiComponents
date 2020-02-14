import { moduleMetadata } from '@storybook/angular';
import { withKnobs, boolean, number } from '@storybook/addon-knobs'
import { DropdownModule } from 'src/app/dropdown/dropdown.module';
import { Component, Input } from '@angular/core';
const faker = require('faker');


export default{
    title: "MultiSubDropdown",
    decorators: [
        moduleMetadata({
            imports: [DropdownModule]
        }),
        withKnobs
    ]
}


const createList = (length = 7) => {
    let list = []
    for(let i = 0; i < length; i++){
        list.push(faker.name.findName())
    }
    return list;
}
let staticList = [{
        category: "SubList",
        options: createList(2)
    }, ...createList(10)];
let chosen = staticList.slice(3,12);





let compOps = (styles: string, template: string = null) => {
    const temp = `
            <div class='full-view wrapper'>
                <multi-sub-dropdown
                    [chosen]="this.chosen"
                    [options]="this.options"
                    [dropped]="this.dropped"
                ></multi-sub-dropdown>
            </div>
        `;
    return {
        template: template != null ? template + temp : temp,
        styles: [styles, `
            .full-view{
                min-height:800px;
                width:100%;
                display:flex;
            }
        `]
    }
}

let props = () => ({
    options: staticList,
    dropped: boolean('dropped',true),
    chosen
});

let defaultStory = (component) => ({
    component,
    props: props()
})




@Component(compOps(``))
class TopLeftComponent {}
export const TopLeft = () => (defaultStory(TopLeftComponent));


@Component(compOps(`
    .wrapper{
        justify-content:center;
    }
`))
class TopCenterComponent {}
export const TopCenter = () => (defaultStory(TopCenterComponent));



@Component(compOps(`
    .wrapper{
        justify-content: flex-end
    }
`))
class TopRightComponent {}
export const TopRight = () => (defaultStory(TopRightComponent));


@Component(compOps(`
    .wrapper{
        align-items:center;
        justify-content:flex-start;
    }
`))
class CenterLeftComponent {}
export const CenterLeft = () => (defaultStory(CenterLeftComponent));



@Component(compOps(`
    .wrapper{
        align-items:center;
        justify-content:center;
    }
`))
class CenterComponent {}
export const Center = () => (defaultStory(CenterComponent));


@Component(compOps(`
    .wrapper{
        align-items:center;
        justify-content:flex-end;
    }
`))
class CenterRightComponent {}
export const CenterRight = () => (defaultStory(CenterRightComponent));


@Component(compOps(`
    .wrapper{
        align-items: flex-end;
        justify-content: flex-start
    }
`))
class BottomLeftComponent {}
export const BottomLeft = () => (defaultStory(BottomLeftComponent));


@Component(compOps(`
    .wrapper{
        align-items:flex-end;
        justify-content:center;
    }
`))
class BottomComponent {}
export const BottomCenter = () => (defaultStory(BottomComponent))


@Component(compOps(`
    .wrapper{
        align-items: flex-end;
        justify-content: flex-end
    }
`))
class BottomRightComponent {}
export const BottomRight = () => (defaultStory(BottomRightComponent));


@Component(compOps(`
    .wrapper{
        align-items:center;
        justify-content:flex-start;
        height:2000px;
    }
`))
class ScrollableLeftComponent {}
export const ScrollableLeft = () => (defaultStory(ScrollableLeftComponent))




@Component(compOps(`
    .wrapper{
        align-items:center;
        justify-content:center;
        height:2000px;
    }
`))
class ScrollableCenterComponent {}
export const ScrollableCenter = () => (defaultStory(ScrollableCenterComponent))


@Component(compOps(`
    .wrapper{
        align-items:center;
        justify-content:flex-end;
        height:2000px;
    }
`))
class ScrollableRightComponent {}
export const ScrollableRight = () => (defaultStory(ScrollableRightComponent))

