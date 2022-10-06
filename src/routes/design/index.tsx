import { useParams } from '@solidjs/router';
import Grid from '../../layout/grid';
import GridGallery from '../../components/grid-gallery';
import PadContent from '../../layout/pad-content';
import Picture from '../../components/picture';
import DesignBlockLinks from '../../components/design-block-links';
import type { LocationLink } from '../../data/designBlocks';
import { designData } from '../../data/designCopy';
import style from './design.module.scss';

const isLocationLink = (param: string): param is LocationLink =>
  ['web', 'app', 'graphic'].includes(param);

const svgBreakpoints: [number, number] = [767, 1049];

const Design = () => {
  const params = useParams();

  const data = () => designData[params.category];

  return (
    <div class={style.design}>
      {isLocationLink(params.category) && (
        <Grid startGap="96">
          <PadContent startAt="tablet">
            <div
              class={`${style.design__hero} ${
                style[`design__hero--${params.category}`]
              } round-689`}
            >
              <h1 class="h">{`${params.category} design`}</h1>
              <p class="p">{data().copy}</p>
              <Picture imgs={data().heroSvg} breakpoints={svgBreakpoints} />
            </div>
          </PadContent>
          <GridGallery imgs={data().imgs} />
          <DesignBlockLinks location={params.category} />
        </Grid>
      )}
    </div>
  );
};

export default Design;
