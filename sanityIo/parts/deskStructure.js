// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-unresolved
import {createSuperPane} from 'sanity-super-pane'
// eslint-disable-next-line import/no-unresolved
import S from '@sanity/desk-tool/structure-builder'
import {SanitySectionTitlesEnum} from "../schemas/sections/transform-hw/sectionTitles";

export default () =>
    S.list()
        .title('Base')
        .items([
            S.listItem()
                .title('Page')
                .child(createSuperPane('homePage', S)),
            S.listItem()
                .title('Header')
                .child(createSuperPane('HeaderSection', S)),

            S.listItem()
                .title('Footer')
                .child(createSuperPane('FooterSection', S)),
            S.listItem()
                .title('Modal')
                .child(createSuperPane('modal', S)),
             S.listItem()
                .title('Menu Container')
                .child(createSuperPane('menuContainer', S)),
            S.listItem()
                .title('Menu Group')
                .child(createSuperPane('menuGroup', S)),
            S.listItem()
                .title('Menu Item')
                .child(createSuperPane('menuItem', S)),
            S.listItem()
                .title('Structured Data Product')
                .child(createSuperPane('structuredDataProduct', S)),
            S.listItem()
                .title('Structured Data Event')
                .child(createSuperPane('structuredDataEvent', S)),
            S.listItem()
                .title('Cold Lead')
                .child(createSuperPane('coldLead', S)),
            S.listItem()
                .title('Media Tags')
                .child(createSuperPane('media.tag', S))
        ]);
