import regionsBoundaries from '../geojson/regions_borders.json'
import departmentsBoundaries from '../geojson/departments_borders.json'

export let views = {
  'régions': {
    'description': 'A view of all french régions',
    'boundaries': {
      'name': 'regions_boundaries',
      'geojson': regionsBoundaries,
      'filter': {
        'activated': false
      }
    },
    'data': {
      'group_by': 'regions_aggregation',
      'filter': {
        'activated': false
      }
    },
    'content': 'metric',
    'linksTo': 'région'
  },
  'région': {
    'description': 'A view of all french departments within a région',
    'boundaries': {
      'name': 'departments_boundaries',
      'geojson': departmentsBoundaries,
      'filter': {
        'activated': true,
        'filterOn': 'regions_boundaries'
      }
    },
    'data': {
      'group_by': 'departments_aggregation',
      'filter': {
        'activated': true,
        'filterOn': 'regions_aggregation'
      }
    },
    'content': 'metric',
    'linksTo': 'département'
  },
  'départements': {
    'description': 'A view of all french departments',
    'boundaries': {
      'name': 'departments_boundaries',
      'geojson': departmentsBoundaries,
      'filter': {
        'activated': false
      }
    },
    'data': {
      'group_by': 'departments_aggregation',
      'filter': {
        'activated': false
      }
    },
    'content': 'metric',
    'linksTo': 'département'
  },
  'département': {
    'description': 'A view of a specific department',
    'boundaries': {
      'name': 'departments_boundaries',
      'geojson': departmentsBoundaries,
      'filter': {
        'activated': true,
        'filterOn': 'departments_boundaries'
      }
    },
    'data': {
      'group_by': 'departments_aggregation',
      'filter': {
        'activated': false
      }
    },
    'content': 'detailedContent',
    'linksTo': 'département'
  }
}
