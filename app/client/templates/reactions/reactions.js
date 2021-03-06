/*****************************************************************************/
/* Reactions: Event Handlers */
/*****************************************************************************/
Template.Reactions.events({
});

/*****************************************************************************/
/* Reactions: Helpers */
/*****************************************************************************/
Template.Reactions.helpers({
  hasReactions: function () {
    return Reactions.find({userId: Meteor.userId()}).count();
  }
});

/*****************************************************************************/
/* Reactions: Lifecycle Hooks */
/*****************************************************************************/
Template.Reactions.created = function () {
};

Template.Reactions.rendered = function () {
};

Template.Reactions.destroyed = function () {
};
