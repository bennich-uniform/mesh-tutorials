import FeaturedDragon from '../src/components/FeaturedDragon';

function UnknownComponent(component) {
  return <div>[unknown component: {component.type}]</div>;
}

export default function resolveRenderer({ type }) {
  if (type == 'featuredDragon') {
    return FeaturedDragon;
  }
  return UnknownComponent;
}
