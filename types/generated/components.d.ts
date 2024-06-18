import type { Schema, Attribute } from '@strapi/strapi';

export interface TournamentKalendar extends Schema.Component {
  collectionName: 'components_tournament_kalendar';
  info: {
    displayName: '\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C';
    icon: 'bulletList';
  };
  attributes: {
    date: Attribute.Date;
    name: Attribute.String;
    place: Attribute.String;
  };
}

export interface TournamentKomandy extends Schema.Component {
  collectionName: 'components_tournament_komandy';
  info: {
    displayName: '\u041A\u043E\u043C\u0430\u043D\u0434\u044B';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    number: Attribute.Integer;
    game: Attribute.Integer;
    points: Attribute.Integer;
    wins: Attribute.Integer;
    losses: Attribute.Integer;
  };
}

export interface TournamentRejting extends Schema.Component {
  collectionName: 'components_tournament_rejting';
  info: {
    displayName: '\u0420\u0435\u0439\u0442\u0438\u043D\u0433';
    icon: 'bulletList';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    number: Attribute.Integer;
    points: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'tournament.kalendar': TournamentKalendar;
      'tournament.komandy': TournamentKomandy;
      'tournament.rejting': TournamentRejting;
    }
  }
}
