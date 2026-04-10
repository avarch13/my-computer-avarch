const modules = import.meta.glob('/src/assets/gallery/*.{png,jpg,jpeg,svg}', { eager: true });

const images = Object.entries(modules).map(([path, mod]) => {
  const name = path.split('/').pop();

  return {
    src: mod.default,
    name,
    description: getDescription(name), // custom mapping
  };
});

function getDescription(name) {
  const map = {
    'photo1.jpg': 'Sunset in the mountains',
    'photo2.jpg': 'City at night',
  };

  return map[name] || '';
}

export default images;