<template>
  <container  class="editor flex animate__animated animate__fadeIn">
      <element-dashboard :samples="samples" @shouldAcceptDrop="false"/>
      <site-workspace v-if="siteToEdit" :siteToEdit="siteToEdit" @shouldAcceptDrop="true" />
  </container>
</template>

<script>
import siteWorkspace from '../components/site-workspace.cmp.vue';
import elementDashboard from '@/components/element-dashboard.cmp.vue';
import { templateService } from '@/services/template-service.js';
import { Container, Draggable } from 'vue-smooth-dnd';
import { applyDrag, generateItems } from '@/assets/drag-test.js';

import {
  eventBus,
  ADD_SAMPLE,
  EDIT_ELEMENT,
  CLONE_ELEMENT,
  REMOVE_ELEMENT,
  MOVE_ELEMENT
} from '@/services/event-bus.service.js';

const _ = require('lodash');

export default {
  name: 'site-editor',
  data() {
    return {
      samples: {},
            site: {
        _id: '5e28393890dd7201a06d4e49',
        name: 'Food',
        previewImg:
          'https://i.ibb.co/cXp8r4b/screenshot-www-thegrilledcheesefactory-fr-2020-07-20-11-29-34.png',
        createdBy: {
          username: 'eni',
          _id: '5e26e0b718a0891d4c995527'
        },
        cmps: [
          {
            type: 'site-section',
            class: 'text-logo-text',
            style: {
              backgroundColor: 'white',
              height: 'auto',
              padding: '10px 10px 10px 10px',
              display: 'flex',
              alignItems: 'center'
            },
            cmps: [
              {
                type: 'site-div',
                style: {},
                cmps: [
                  {
                    type: 'site-text',
                    content: `BEST GRILLED CHEESE IN TOWN 
                              FRESH & QUALITY CRAFT FOOD
                    `,
                    style: {

                    }
                  }
                ]
              },
              {
                type: 'site-div',
                style: {},
                cmps: [
                  {
                    type: 'site-image',
                    content:
                      'https://static.wixstatic.com/media/011abe_cfe720bc821e40eeb582ac83c83886da~mv2.png/v1/fill/w_206,h_206,al_c,q_85,usm_0.66_1.00_0.01/logo%20sans%20fond.webp',
                    style: {
                    }
                  },
                  {
                    type: 'site-text',
                    content: `PARIS / SINCE 2014
                    `,
                    style: {

                    }
                  }
                ]
              },
              {
                type: 'site-div',
                style: {},
                cmps: [
                  {
                    type: 'site-text',
                    content: `PARIS - BASTILLE / CONVENTION
                              PEACE, LOVE & GRILLED CHEESE
                    `,
                    style: {

                    }
                  }
                ]
              },
            ]
          },
          {
            type: 'site-section',
            style: {
              background: `url('https://i.ibb.co/QcrSyJF/Screenshot-2020-07-20-12-19-02.png') no-repeat`,
              backgroundPosition: `center`,
              backgroundSize: `contain`,
              width: '100%',
              height: '40vw',
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'Righteous'
            },
            cmps: [

            ]
          },
          {
            type: 'site-section',
            style: {
              background: `url('https://i.ibb.co/XbfLNH1/Screenshot-2020-07-20-12-56-36.png') no-repeat`,
              backgroundPosition: `center`,
              backgroundSize: `contain`,
              width: '100%',
              height: '40vw',
              display: 'flex',
              flexDirection: 'column',
              justifyContent:'space-around',
              alignItems: 'flex-start',
              fontFamily: 'Righteous'
            },
            cmps: [
              {
                type: 'site-div',
                style: {},
                cmps: [
                  {
                    type: 'site-text',
                    content: `touS nos pains sont réalisés sur mesure  et pétris avec amour tous les jours par nos boulangers
                    `,
                    style: {

                    }
                  }
                ]
              },
              {
                type: 'site-div',
                style: {},
                cmps: [
                  {
                    type: 'site-text',
                    content: `chaque grilled cheese est préparé a la commande, cuits à la main à la poêle dans nos cuisines ouvertes
                    `,
                    style: {

                    }
                  }
                ]
              },
              {
                type: 'site-div',
                style: {},
                cmps: [
                  {
                    type: 'site-text',
                    content: `suivez chaque etape de sa réalisation
                    `,
                    style: {

                    }
                  }
                ]
              },
              {
                type: 'site-div',
                style: {},
                cmps: [
                  {
                    type: 'site-text',
                    content: `tout nos produits sont frais et choisiS avec précaution par nos soins
                    `,
                    style: {

                    }
                  }
                ]
              },
              {
                type: 'site-div',
                style: {},
                cmps: [
                  {
                    type: 'site-text',
                    content: `toutes nos préparations sont faites maison
                    `,
                    style: {
                      backgroundColor: '#BA2204'
                    }
                  }
                ]
              },
            ]
          },
          {
            type: 'site-section',
            style: {
              backgroundColor: '#f3eee9',
              height: '1400px',
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              padding: '4rem 11rem'
            },
            cmps: [
              {
                type: 'site-div',
                style: {
                  height: '500px',
                  width: '45%',
                  display: 'flex',
                  flexDirection: 'center',
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  position: 'relative',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: '0 0 3px black'
                },
                cmps: [
                  {
                    type: 'site-image',
                    content:
                      'https://images.unsplash.com/photo-1566903026052-36e4e1bd803a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80',
                    style: {
                      height: '260px',
                      borderRadius: '12px 12px 0px 0px',
                      objectFit: 'cover',
                      width: '100%'
                    }
                  },
                  {
                    type: 'site-image',
                    content:
                      'https://images.unsplash.com/photo-1566903026052-36e4e1bd803a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80',
                    style: {
                      height: '100px',
                      width: '100px',
                      position: 'absolute',
                      border: '6px white solid',
                      borderRadius: '50%',
                      bottom: '38%',
                      zIndex: '1',
                      left: 'calc(50% - 50px)',
                      objectFit: 'cover'
                    }
                  },
                  {
                    type: 'site-text',
                    content: 'Dogs',
                    style: {
                      marginBlockStart: '5rem',
                      fontFamily: 'Righteous',
                      fontSize: '2rem',
                      color: '#5aa55e'
                    }
                  },
                  {
                    type: 'site-text',
                    content: "Read All About The Man's Best Friend .",
                    style: {
                      fontFamily: 'Righteous',
                      color:
                        '#https://images.unsplash.com/photo-1517649281203-dad836b4abe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80335b3b'
                    }
                  },
                  {
                    type: 'site-text',
                    content: 'READ MORE',
                    style: {
                      fontFamily: 'Righteous',
                      color: '#0000000',
                      marginBlockStart: '2rem',
                      borderBlockStart: '1px solid black',
                      width: '100%',
                      textAlign: 'center',
                      paddingBlockStart: '1rem'
                    }
                  }
                ]
              },
              {
                type: 'site-div',
                style: {
                  height: '500px',
                  width: '45%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  position: 'relative',
                  alignItems: 'center',
                  boxShadow: '0 0 3px black'
                },
                cmps: [
                  {
                    type: 'site-image',
                    content:
                      'https://images.unsplash.com/photo-1517649281203-dad836b4abe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    style: {
                      height: '260px',
                      objectFit: 'cover',
                      width: '100%',
                      borderRadius: '12px 12px 0px 0px'
                    }
                  },
                  {
                    type: 'site-image',
                    content:
                      'https://images.unsplash.com/photo-1517649281203-dad836b4abe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    style: {
                      height: '100px',
                      width: '100px',
                      position: 'absolute',
                      border: '6px white solid',
                      borderRadius: '50%',
                      bottom: '38%',
                      zIndex: '1',
                      left: 'calc(50% - 50px)',
                      objectFit: 'cover'
                    }
                  },
                  {
                    type: 'site-text',
                    content: 'The King Of The Jungle',
                    style: {
                      marginBlockStart: '5rem',
                      fontFamily: 'Righteous',
                      fontSize: '2rem',
                      color: '#53311d'
                    }
                  },
                  {
                    type: 'site-text',
                    content: 'Read All About The Mighty Lion.',
                    style: {
                      fontFamily: 'Righteous',
                      color: '#3d3d3c'
                    }
                  },
                  {
                    type: 'site-text',
                    content: 'READ MORE',
                    style: {
                      fontFamily: 'Righteous',
                      color: '#0000000',
                      marginBlockStart: '2rem',
                      borderBlockStart: '1px solid black',
                      width: '100%',
                      textAlign: 'center',
                      paddingBlockStart: '1rem'
                    }
                  }
                ]
              },
              {
                type: 'site-div',
                style: {
                  height: '500px',
                  width: '45%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  position: 'relative',
                  alignItems: 'center',
                  marginBlockStart: '7rem',
                  boxShadow: '0 0 3px black'
                },
                cmps: [
                  {
                    type: 'site-image',
                    content:
                      'https://images.unsplash.com/photo-1547801939-d3ac28994d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
                    style: {
                      height: '260px',
                      objectFit: 'cover',
                      width: '100%',
                      borderRadius: '12px 12px 0px 0px'
                    }
                  },
                  {
                    type: 'site-image',
                    content:
                      'https://images.unsplash.com/photo-1547801939-d3ac28994d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
                    style: {
                      height: '100px',
                      width: '100px',
                      position: 'absolute',
                      backgroundSize: 'cover',
                      border: '6px white solid',
                      borderRadius: '50%',
                      bottom: '38%',
                      zIndex: '1',
                      left: 'calc(50% - 50px)',
                      objectFit: 'cover'
                    }
                  },
                  {
                    type: 'site-text',
                    content: 'JAWS',
                    style: {
                      marginBlockStart: '5rem',
                      fontFamily: 'Righteous',
                      fontSize: '2rem',
                      color: '#3855bc'
                    }
                  },
                  {
                    type: 'site-text',
                    content: 'Read All About Sharks.',
                    style: {
                      fontFamily: 'Righteous',
                      color: '#527db4'
                    }
                  },
                  {
                    type: 'site-text',
                    content: 'READ MORE',
                    style: {
                      fontFamily: 'Righteous',
                      color: '#0000000',
                      marginBlockStart: '2rem',
                      borderBlockStart: '1px solid black',
                      width: '100%',
                      textAlign: 'center',
                      paddingBlockStart: '1rem'
                    }
                  }
                ]
              },
              {
                type: 'site-div',
                style: {
                  height: '500px',
                  width: '45%',
                  display: 'flex',
                  flexDirection: 'center',
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  position: 'relative',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginBlockStart: '7rem',
                  boxShadow: '0 0 3px black'
                },
                cmps: [
                  {
                    type: 'site-image',
                    content:
                      'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2017/10/PF2015_267_Kittens_Shelter-630.jpg',
                    style: {
                      height: '260px',
                      objectFit: 'cover',
                      width: '100%',
                      borderRadius: '12px 12px 0px 0px'
                    }
                  },
                  {
                    type: 'site-image',
                    content:
                      'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2017/10/PF2015_267_Kittens_Shelter-630.jpg',
                    style: {
                      height: '100px',
                      width: '100px',
                      position: 'absolute',
                      border: '6px white solid',
                      borderRadius: '50%',
                      bottom: '38%',
                      zIndex: '1',
                      left: 'calc(50% - 50px)',
                      objectFit: 'cover'
                    }
                  },
                  {
                    type: 'site-text',
                    content: 'Cats',
                    style: {
                      marginBlockStart: '5rem',
                      fontFamily: 'Righteous',
                      fontSize: '2rem',
                      color: '#704a26'
                    }
                  },
                  {
                    type: 'site-text',
                    content: 'Read All About Cats.',
                    style: {
                      fontFamily: 'Righteous',
                      color: '#434343'
                    }
                  },
                  {
                    type: 'site-text',
                    content: 'READ MORE',
                    style: {
                      fontFamily: 'Righteous',
                      color: '#0000000',
                      marginBlockStart: '2rem',
                      borderBlockStart: '1px solid black',
                      width: '100%',
                      textAlign: 'center',
                      paddingBlockStart: '1rem'
                    }
                  }
                ]
              },
              {
                type: 'site-div',
                style: {
                  width: '100%',
                  textAlign: 'center'
                },
                cmps: [
                  {
                    type: 'site-button',
                    content: { text: 'MORE ARTICLES...', href: '' },
                    style: {
                      backgroundColor: '#cfaf8987',
                      borderRadius: '20px',
                      padding: '1rem',
                      marginBlockStart: '3rem',
                      width: '50%',
                      fontSize: '1.2rem',
                      boxShadow: '0 0 2px black'
                    }
                  }
                ]
              }
            ]
          },

          {
            type: 'site-section',
            style: {
              height: '250px',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              backgroundColor: '#9f611580',
              color: 'white',
              paddingBlockStart: '2rem'
            },
            cmps: [
              {
                type: 'site-div',
                style: {
                  height: '100%'
                },
                cmps: [
                  {
                    type: 'site-text',
                    content: 'DESTINATIONS',
                    style: {
                      width: '100px',
                      fontWeigt: 'bold',
                      fontSize: '1.5rem'
                    }
                  },
                  {
                    type: 'site-list',
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      color: '#fff',
                      marginTop: '1rem'
                    },
                    cmps: [
                      {
                        type: 'site-text',
                        content: `New-Zealand Australia Argentina Bolivia More...`,
                        style: {
                          display: 'flex',
                          flexDirection: 'column',
                          width: '100px'
                        }
                      }
                    ]
                  }
                ]
              },

              {
                type: 'site-div',
                style: {
                  height: '100%'
                },
                cmps: [
                  {
                    type: 'site-text',
                    content: 'SHOP',
                    style: {
                      width: '100px',
                      fontWeigt: 'bold',
                      fontSize: '1.5rem'
                    }
                  },
                  {
                    type: 'site-list',
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      color: '#fff',
                      marginTop: '1rem'
                    },
                    cmps: [
                      {
                        type: 'site-text',
                        content: `Non English Guides Delivery Times Special Offers FAQs`,
                        style: {
                          display: 'flex',
                          flexDirection: 'column',
                          width: '142px'
                        }
                      }
                    ]
                  }
                ]
              },
              {
                type: 'site-div',
                style: {
                  height: '100%'
                },
                cmps: [
                  {
                    type: 'site-text',
                    content: 'FORUMS',
                    style: {
                      width: '100px',
                      fontWeigt: 'bold',
                      fontSize: '1.5rem'
                    }
                  },
                  {
                    type: 'site-list',
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      color: '#fff',
                      marginTop: '1rem'
                    },
                    cmps: [
                      {
                        type: 'site-text',
                        content: `Country Forums Interest Forums Talk To Us`,
                        style: {
                          display: 'flex',
                          flexDirection: 'column',
                          width: '140px'
                        }
                      }
                    ]
                  }
                ]
              },
              {
                type: 'site-div',
                style: {
                  height: '100%'
                },
                cmps: [
                  {
                    type: 'site-text',
                    content: 'TRAVEL BOOKING',
                    style: {
                      width: '100px',
                      fontWeigt: 'bold',
                      fontSize: '1.5rem'
                    }
                  },
                  {
                    type: 'site-list',
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      color: '#fff',
                      marginTop: '1rem'
                    },
                    cmps: [
                      {
                        type: 'site-text',
                        content: `Hotels Flights Insurance`,
                        style: {
                          display: 'flex',
                          flexDirection: 'column',
                          width: '90px'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    };
  },
  computed: {
    siteToEdit(){
        return this.$store.getters.site;
    }
  },
  async created() {
    this.loadSite();

    this.samples = templateService.getSamplesOf('section');
    
    eventBus.$on(ADD_SAMPLE, sample => this.addSample(sample));
    eventBus.$on(CLONE_ELEMENT, element => this.clone(element));
    eventBus.$on(REMOVE_ELEMENT, elementId => this.remove(elementId));
    eventBus.$on(MOVE_ELEMENT, (elementId, direction) => this.moveElement(elementId, direction));
  },
  methods: {
    async loadSite() {
      const site = await this.$store.dispatch({type: 'loadSite', id: this.$route.params.id});
    },
    addSample(sample) {
      this.siteToEdit.cmps.unshift(sample);
      this.$store.commit({type:'setSite', site:this.siteToEdit})
    },
    getElementSamples(element) {
      this.samples = templateService.getSamplesOf(element);
    },
    moveElement(elementId, direction) {
      const cmps = this.siteToEdit.cmps;
      const idx = cmps.findIndex(cmp => cmp.id === elementId);
      if (direction === 'down' && idx + 1 < cmps.length) {
        const cmp = cmps[idx];
        cmps.splice(idx, 1, cmps[idx + 1]);
        cmps.splice(idx + 1, 1, cmp);
      } else if (direction === 'up' && idx !== 0) {
        const cmp = cmps[idx];
        cmps.splice(idx, 1, cmps[idx - 1]);
        cmps.splice(idx - 1, 1, cmp);
      }
      this.$store.commit({type:'setSite', site:this.siteToEdit})

    },
    clone(element) {
      const cmps = this.siteToEdit.cmps;
      const idx = cmps.findIndex(cmp => cmp.id === element.id);
      let clone = _.cloneDeep(element);
      clone.id = templateService.makeId();
      clone = templateService.addIds(clone);
      cmps.splice(idx, 0, clone);
      this.$store.commit({type:'setSite', site:this.siteToEdit})
    },
    remove(elementId) {
      const cmps = this.siteToEdit.cmps;
      const idx = cmps.findIndex(cmp => cmp.id === elementId);
      cmps.splice(idx, 1);
      this.$store.commit({type:'setSite', site:this.siteToEdit})
    },
  },
  watch: {
    '$route.params.id'() {
      this.loadSite();
    }
  },
  components: {
    siteWorkspace,
    elementDashboard,
    Container,
    Draggable
  }
};
</script>
