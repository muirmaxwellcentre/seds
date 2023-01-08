<template>
  <div>
    <b-form @change="onChange">
      <b-list-group class="mb-3">
        <b-list-group-item v-for="question of booleanQuestions">
          <b-form-checkbox
            :id="question.id"
            :value="question.id"
            v-model="selected"
            ><p class="option">{{ question.text }}</p></b-form-checkbox
          >
          <div
            class="comment"
            v-if="question.comment"
            v-html="question.comment"
          ></div>
        </b-list-group-item>

        <b-list-group-item v-for="(question, i) in pointsQuestions">
          <b-container>
            <b-row>
              <b-col cols="9">
                <p class="option">{{ question.text }}</p>
              </b-col>
              <b-col cols="3">
                <b-form-input
                  :id="question.id"
                  type="number"
                  :max="question.maxValue"
                  v-model="question.value"
                  min="0"
                  :ref="question.id"
                ></b-form-input>
              </b-col>
            </b-row>
          </b-container>

          <p class="comment" v-if="question.comment">{{ question.comment }}</p>
        </b-list-group-item>

        <b-list-group-item class="mt-5">
          <p class="mt-2 result">{{ `${score}/${maxScore}` }} {{ result }}</p>
          <b-progress
            class="mt-3"
            :value="score"
            :max="maxScore"
            :variant="progressVariant"
            label="Result"
          ></b-progress>

          <p class="mt-3 interpretation">{{ interpretation }}</p>
        </b-list-group-item>
      </b-list-group>
    </b-form>
  </div>
</template>

<script lang="ts">
import {defineComponent, type PropType} from 'vue';
import {Result, ResultInterpretationMap, type Question} from '@/questions';
import {
  BForm,
  BContainer,
  BFormCheckbox,
  BFormInput,
  BProgress,
} from 'bootstrap-vue-3';

export default defineComponent({
  name: 'Questionaire',
  props: {
    questions: {
      type: Array as PropType<Question[]>,
      required: true,
    },
  },
  data() {
    return {
      selected: [],
      score: 0,
    };
  },
  computed: {
    booleanQuestions(): Question[] {
      return this.questions.filter((q) => q.type === 'Boolean');
    },
    pointsQuestions(): Question[] {
      return this.questions.filter((q) => q.type === 'Points');
    },
    maxScore(): number {
      const booleans = this.booleanQuestions
        .map((q) => q.value)
        .reduce((a, b) => a + b, 0);

      const points = this.pointsQuestions
        .map((q) => q.maxValue as number)
        .reduce((a, b) => a + b, 0);

      return booleans + points;
    },
    result(): Result {
      if (this.score >= 2 && this.score <= 3) {
        return Result.ModerateRisk;
      }

      if (this.score >= 4 && this.score <= 5) {
        return Result.HighRisk;
      }

      if (this.score >= 6 && this.score <= 8) {
        return Result.HighestRisk;
      }

      return Result.LowRisk;
    },
    progressVariant() {
      switch (this.result) {
        case Result.ModerateRisk:
          return 'warning';
        case Result.HighRisk:
          return 'danger';
        case Result.HighestRisk:
          return 'danger';
        default:
          return 'primary';
      }
    },
    interpretation(): string {
      return ResultInterpretationMap[this.result];
    },
  },
  methods: {
    onChange() {
      this.score = this.calculateScore();
      console.log(ResultInterpretationMap[this.result]);
    },
    calculateBooleans(): number {
      const ids = Object.values(this.selected);
      const selectedOptions = this.booleanQuestions.filter((q) =>
        ids.includes(q.id as never),
      );

      return selectedOptions
        .map((option) => option.value)
        .reduce((a, b) => a + b, 0);
    },
    calculatePoints() {
      return this.pointsQuestions
        .map((question) => +question.value)
        .reduce((a, b) => a + b, 0);
    },
    calculateScore() {
      return this.calculateBooleans() + this.calculatePoints();
    },
  },
});
</script>

<style>
.option {
  font-size: x-large;
  font-weight: bold;
  color: #844084;
  margin-bottom: 0;
}
.comment {
  font-style: italic;
  padding-left: 0.5rem;
}
.result {
  font-size: xx-large;
  text-align: center;
  font-weight: 900;
  color: #844084;
}

.interpretation {
  text-align: center;
  font-weight: bold;
  font-size: x-large;
}

.form-check-input {
  width: 1.3em !important;
  height: 1.3em !important;
  margin-top: 0.4em !important;
}

.form-check-label {
  margin-left: 0.1rem !important;
}

label {
  display: block !important;
  margin-left: 0.5em !important;
}
</style>
